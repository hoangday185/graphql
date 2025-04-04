import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from './model/post.model';
import { PostService } from './post.service';
import { PostArgs } from './dto/posts.args';
import { NewPostInput } from './dto/new-post.input';
import { User } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import { RedisService } from 'src/redis/redis.service';
import { generateKeyCache } from 'src/utils/generateKeyCache';

@Resolver(() => Post)
export class PostReslovers {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly redis: RedisService,
  ) {}

  @Query(() => Post, { name: 'post' })
  async post(@Args('postId') args: string): Promise<Post> {
    // Check cache first
    const cachedPost = await this.redis.get(generateKeyCache('post', args));
    if (cachedPost) {
      return JSON.parse(cachedPost);
    }
    // If not found in cache, fetch from database
    const post = await this.postService.findOneById(args);
    // Set cache
    await this.redis.set(generateKeyCache('post', args), JSON.stringify(post));
    return post;
  }

  @Query(() => [Post], { name: 'posts' })
  async posts(@Args() arg: PostArgs): Promise<Post[]> {
    // Check cache first
    const cachedPosts = await this.redis.get(generateKeyCache('post', 'all'));
    if (cachedPosts) {
      return JSON.parse(cachedPosts);
    }
    // If not found in cache, fetch from database
    const posts = await this.postService.findAll();
    // Set cache
    await this.redis.set('post:all', JSON.stringify(posts));

    return posts;
  }

  @Mutation(() => Post)
  async createPost(
    @Args('newPostInput') newPostInput: NewPostInput,
  ): Promise<Post> {
    return await this.postService.create(newPostInput);
  }

  @ResolveField('author', () => User)
  async author(@Parent() post: Post): Promise<User> {
    return await this.userService.findAuthor(post.authorId);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('postId') postId: string,
    @Args('newPostInput') newPostInput: NewPostInput,
  ): Promise<Post> {
    return await this.postService.update(postId, newPostInput);
  }

  @Mutation(() => Boolean)
  async deletePost(@Args('postId') postId: string): Promise<boolean> {
    return await this.postService.delete(postId);
  }
}
