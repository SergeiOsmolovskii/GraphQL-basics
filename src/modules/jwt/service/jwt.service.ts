import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class JwtService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async login(email: string, password: string): Promise<String> {
    const response = await this.post('/login', {
      email,
      password,
    });
    return response.jwt;
  }

}