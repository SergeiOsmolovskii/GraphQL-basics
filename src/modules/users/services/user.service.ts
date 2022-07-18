import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class userService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUserById(id: string): Promise<any> {
    const response = await this.get(`/${id}`);
    return response;
  }

  async createUser(user): Promise<any> {
   
    const response = await this.post('/register', {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email
    });
    return response;
  }

}