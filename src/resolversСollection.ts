import { jwtResolver } from "./modules/jwt/resolvers/jwt.resolver.js";



export const resolversCollection = {
  Query: {
    ...jwtResolver.Query,
  },
/*   Mutations: {

  }, */


}