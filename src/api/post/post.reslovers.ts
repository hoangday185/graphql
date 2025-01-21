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

@Resolver(() => Post)
export class PostReslovers {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Query(() => Post, { name: 'post' })
  async post(@Args('postId') args: string): Promise<Post> {
    return await this.postService.findOneById(args);
  }

  @Query(() => [Post], { name: 'posts' })
  async posts(@Args() arg: PostArgs): Promise<Post[]> {
    return await this.postService.findAll();
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
