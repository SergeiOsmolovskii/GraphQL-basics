export const trackResolver = {
  Query: {
    tracks: async (_, {limit, offset}, { dataSources }) => {
      return dataSources.trackService.getAllTracks(limit, offset);
    },
    track: async (_, {id}, { dataSources }) => {
      return dataSources.trackService.getTrackById(id);
    } 
  },
  Mutation: {
    createTrack: async (_, trackData, { dataSources }) => {
      return dataSources.trackService.createTrack(trackData);
    },
    updateTrack: async (_, {id, title, albumId, artistsIds, bandsIds, duration, released, genresIds}, { dataSources }) => {
      return dataSources.trackService.updateTrack(id, {title, albumId, artistsIds, bandsIds, duration, released, genresIds});
    },
    deleteTrack: async (_, {id}, { dataSources }) => {
      return dataSources.trackService.deleteTrack(id);
    }
  },
  Track: {
    album(parent, _,  {dataSources}) {
      const album = dataSources.albumService.getAlbumById(parent.albumId);
      return album;
    },
    artists(parent, _, { dataSources }) {    
      const artists = parent.artistsIds.map((id: string) => dataSources.artistService.getArtistById(id));
      return artists;
    },
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id: string) => dataSources.bandService.getBandById(id));
      return bands;
    },
    genres(parent, _, { dataSources }) {
      const genres = parent.genresIds.map((id: string) => dataSources.genreService.getGenreById(id));
      return genres;
    }
  }
}