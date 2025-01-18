import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
