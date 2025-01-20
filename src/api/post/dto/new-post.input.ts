import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewPostInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: string;
}
