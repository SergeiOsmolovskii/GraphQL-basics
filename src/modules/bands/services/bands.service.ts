import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class bandService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getAllBands(limit = 5, offset = 0): Promise<any> {
    const response = await this.get('', { limit: limit, offset: offset }); 
    return response.items;
  }

  async getBandById(id: string): Promise<any> {
    const response = await this.get(`/${id}`);
    return response; 
  }

  async createBand(band): Promise<any> {   
    const response = await this.post('', {
      name: band.name,
      origin: band.origin,
      members: band.members,
      website: band.website,
      genres: band.genres
    })
    return response;
  }

  async updateBand(id: string, band): Promise<any> {
    const response = await this.put(`/${id}`, {
      name: band.name,
      origin: band.origin,
      members: band.members,
      website: band.website,
      genresIds: band.genresIds
    })
    return response;
  }

  async deleteBand(id: string): Promise<any> {
    const response = await this.delete(`/${id}`);
    return response;
  }
}