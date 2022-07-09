import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class artistService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getAllArtists(limit = 5, offset = 0): Promise<any> {
    const response = await this.get('', { limit: limit, offset: offset }); 
    return response.items;
  }

  async getArtistById(id: string): Promise<any> {
    const response = await this.get(`/${id}`);
    return response;
  }

  async createArtist(artist): Promise<any> {   
    const response = await this.post('', artist);
    return response;
  }

  async updateArtist(id: string, artist): Promise<any> {
    const response = await this.put(`/${id}`, {
      firstName: artist.firstName,
      secondName: artist.secondName,
      middleName: artist.middleName,
      birthDate: artist.birthDate,
      birthPlace: artist.birthPlace,
      country: artist.country,
      bands: artist.bands,
      instruments: artist.instruments,
    });
    return response;
  }

  async deleteArtist(id: string): Promise<any> {
    const response = await this.delete(`/${id}`);
    return response;
  }

}