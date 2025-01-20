import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from './model/post.model';
import { PostService } from './post.service';
import { PostArgs } from './dto/posts.args';
import { NewPostInput } from './dto/new-post.input';

@Resolver('post')
export class PostReslovers {
  constructor(private readonly postService: PostService) {}

  @Query(() => Post)
  async post(@Args('id') args: string): Promise<Post> {
    return await this.postService.findOneById(args);
  }

  @Query(() => [Post])
  async posts(@Args() arg: PostArgs): Promise<Post[]> {
    return await this.postService.findAll();
  }

  @Mutation(() => Post)
  async createPost(
    @Args('newPostInput') newPostInput: NewPostInput,
  ): Promise<Post> {
    return await this.postService.create(newPostInput);
  }
}
