import { JwtService } from './modules/jwt/service/jwt.service.js';
import { userService } from './modules/users/services/user.service.js';
import { genreService } from './modules/genres/services/genres.service.js';
import { bandService } from './modules/bands/services/bands.service.js';
import { artistService } from './modules/artists/services/artists.service.js';
import { albumService } from './modules/albums/services/albums.service.js';
import { trackService } from './modules/tracks/services/tracks.service.js';

export const servicesCollection = {
  JwtService: new JwtService(),
  userService: new userService(),
  genreService: new genreService(),
  bandService: new bandService(),
  artistService: new artistService(),
  albumService: new albumService(),
  trackService: new trackService()
}
