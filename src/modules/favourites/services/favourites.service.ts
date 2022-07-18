import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class favouritesService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getFavourites(token: String) { 
    let response = await this.get(''); 
    return token ? response : null;
  }

  async addTrackToFavourites(trackId: String) {
    const newFavouriteTrack = await this.put('/add', {
      type: 'tracks',
      id: trackId
    })
    return newFavouriteTrack;
  }

  async addBandToFavourites(bandId: String) {
    const newFavouriteBand = await this.put('/add', {
      type: 'bands',
      id: bandId
    })
    return newFavouriteBand;
  }

  async addArtistToFavourites(artistId: String) {
    const newFavouriteArtist = await this.put('/add', {
      type: 'artists',
      id: artistId
    })
    return newFavouriteArtist;
  }

  async addGenreToFavourites(genreId: String) {
    const newFavouriteGenre = await this.put('/add', {
      type: 'genres',
      id: genreId
    })
    return newFavouriteGenre;
  }
}