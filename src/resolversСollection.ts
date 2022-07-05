import { jwtResolver } from "./modules/jwt/resolvers/jwt.resolver.js";
import { userResolver } from "./modules/users/resolvers/users.resolver.js";


export const resolversCollection = {
  Query: {
    ...jwtResolver.Query,
    ...userResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },


}