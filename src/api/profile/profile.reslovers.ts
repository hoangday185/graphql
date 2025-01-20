import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './model/profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileReslover {
  constructor(private readonly profile: ProfileService) {}
}
