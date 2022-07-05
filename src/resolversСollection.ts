import { jwtResolver } from "./modules/jwt/resolvers/jwt.resolver.js";
import { userResolver } from "./modules/users/resolvers/users.resolver.js";
import { genreResolver } from "./modules/genres/resolvers/genres.resolver.js";


export const resolversCollection = {
  Query: {
    ...jwtResolver.Query,
    ...userResolver.Query,
    ...genreResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...genreResolver.Mutation
  },


}