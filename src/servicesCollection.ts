import { JwtService } from './modules/jwt/service/jwt.service.js';
import { userService } from './modules/users/services/user.service.js';
import { genreService } from './modules/genres/services/genres.service.js';
import { bandService } from './modules/bands/services/bands.service.js';

export const servicesCollection = {
  JwtService: new JwtService(),
  userService: new userService(),
  genreService: new genreService(),
  bandService: new bandService()
}
