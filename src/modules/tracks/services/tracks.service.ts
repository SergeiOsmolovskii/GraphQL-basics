import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class trackService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getAllTracks(limit = 5, offset = 0): Promise<any> {   
    const response = await this.get('', { limit: limit, offset: offset }); 
    return response.items;
  }

  async getTrackById(id: string): Promise<any> {
    const response = await this.get(`/${id}`);
    return response;
  }

  async createTrack(track): Promise<any> {
    const response = await this.post('', track);
    return response;
  }

  async updateTrack(id: string, track): Promise<any> {     
    const response = await this.put(`/${id}`, {
      ...track
    });
    return response;
  }

  async deleteTrack(id: string): Promise<any> {
    const response = await this.delete(`/${id}`);
    return response;
  }

}