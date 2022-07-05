import { JwtService } from './modules/jwt/service/jwt.service.js';
import { userService } from './modules/users/services/user.service.js';

export const servicesCollection = {
  JwtService: new JwtService(),
  userService: new userService()
}
