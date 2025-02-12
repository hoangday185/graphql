import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { UserArgs } from './dto/users.args';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PostService } from '../post/post.service';
import { Post } from '../post/model/post.model';
import { Profile } from '../profile/model/profile.model';
import { ProfileService } from '../profile/profile.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
    private readonly profileService: ProfileService,
  ) {}

  @Query(() => User)
  async user(@Args('id') args: string): Promise<User> {
    return await this.userService.findOneById(args);
  }

  @Query(() => [User])
  async users(@Args() args: UserArgs): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(
    @Args('newUserInput') newUserInput: NewUserInput,
  ): Promise<User> {
    return await this.userService.create(newUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.update(id, updateUserInput);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return await this.userService.delete(id);
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() user: User): Promise<Post[]> {
    return await this.postService.findPostById(user.id);
  }

  @ResolveField('profile', () => Profile)
  async getProfile(@Parent() user: User): Promise<Profile> {
    return await this.profileService.getProfile(user.id);
  }
}
