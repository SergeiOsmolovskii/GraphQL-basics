import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class JwtService extends RESTDataSource {
  baseURL: string;

  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async login(email, password) {
    console.log(this.baseURL);
    
    const response = await this.post('/login', {
      email,
      password,
    });
    return response.jwt;
  }

}