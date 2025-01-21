import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './model/profile.model';
import { ProfileService } from './profile.service';
import { NewProfileInput } from './dto/new-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Resolver(() => Profile)
export class ProfileReslover {
  constructor(private readonly profile: ProfileService) {}

  @Mutation(() => Profile)
  async updateProfile(
    @Args('userid') userId: string,
    @Args('updateProfileInput') data: UpdateProfileInput,
  ): Promise<Profile> {
    return await this.profile.updateProfile(userId, data);
  }
}
