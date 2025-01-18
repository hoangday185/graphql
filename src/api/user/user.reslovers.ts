import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { UserArgs } from './dto/users.args';

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
}
