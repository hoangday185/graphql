import { Field, InputType } from '@nestjs/graphql';
import { Profile } from 'src/api/profile/model/profile.model';

@InputType()
export class NewUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
