import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class genreService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getAllGeners(limit = 5, offset = 0): Promise<any> {
    const response = await this.get('', { limit: limit, offset: offset }); 
    return response.items;
  }

  async getGenreById(id: string): Promise<any> {
    const response = await this.get(`/${id}`);
    return response;
  }

  async createGenre(genre): Promise<any> {    
    const response = await this.post('', {
      name: genre.name,
      description: genre.description,
      country: genre.country,
      year: genre.year
    });
    return response;
  }

}