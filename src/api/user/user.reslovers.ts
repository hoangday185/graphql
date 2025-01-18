import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { UserArgs } from './dto/users.args';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') args: string): Promise<User> {
    return await this.userService.findOneById(args);
  }

  @Query(() => [User], { name: 'users' })
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
}
