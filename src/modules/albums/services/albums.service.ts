import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class albumService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getAllAlbums(limit = 5, offset = 0): Promise<any> {   
    const response = await this.get('', { limit: limit, offset: offset }); 
    return response.items;
  }

  async getAlbumById(id: number): Promise<any> {
    const response = await this.get(`/${id}`);
    return response;
  }

  async createAlbum(album): Promise<any> {
    const response = await this.post('', album);
    return response;
  }

  async updateAlbum(id: string, album): Promise<any> {
    const response = await this.put(`/${id}`, {
      ...album,
    });
    return response;
  }

  async deleteAlbum(id: string): Promise<any> {
    const response = await this.delete(`/${id}`);
    return response;
  }
}