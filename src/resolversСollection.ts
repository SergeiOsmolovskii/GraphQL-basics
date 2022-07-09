import { jwtResolver } from "./modules/jwt/resolvers/jwt.resolver.js";
import { userResolver } from "./modules/users/resolvers/users.resolver.js";
import { genreResolver } from "./modules/genres/resolvers/genres.resolver.js";
import { bandResolver } from "./modules/bands/resolvers/bands.resolver.js";
import { artistResolver } from "./modules/artists/resolvers/artists.resolver.js";
import { albumResolver } from "./modules/albums/resolvers/albums.resolver.js";
import { trackResolver } from "./modules/tracks/resolvers/tracks.resolver.js";

export const resolversCollection = {
  Query: {
    ...jwtResolver.Query,
    ...userResolver.Query,
    ...genreResolver.Query,
    ...bandResolver.Query,
    ...artistResolver.Query,
    ...albumResolver.Query,
    ...trackResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...genreResolver.Mutation,
    ...bandResolver.Mutation,
    ...artistResolver.Mutation,
    ...albumResolver.Mutation,
    ...trackResolver.Mutation
  },
  Band: {
    ...bandResolver.Band,
  },
  Artist: {
    ...artistResolver.Artist,
  },
  Member: {
    ...bandResolver.Member,
  },
  Album: {
    ...albumResolver.Album,
  },
  Track: {
    ...trackResolver.Track,
  }


}