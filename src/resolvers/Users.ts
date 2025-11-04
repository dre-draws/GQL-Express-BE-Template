import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class UsersResolver {
  @Query(() => String)
  async basicQuery(@Arg("echoMessage") echoMessage: string) {
    return echoMessage;
  }
}
