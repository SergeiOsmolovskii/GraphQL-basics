export const albumResolver = {
  Query: {
    albums: async (_, {limit, offset}, { dataSources }) => {
      return dataSources.albumService.getAllAlbums(limit, offset);
    },
    album: async (_, {id}, { dataSources }) => {
      return dataSources.albumService.getAlbumById(id);
    }
  },
  Mutation: {
    createAlbum: async (_, albumData, { dataSources }) => {    
      return dataSources.albumService.createAlbum(albumData);
    },
    updateAlbum: async (_, {id, name, released, artistsIds, bandsIds, trackIds, genresIds, image }, { dataSources }) => {
      return dataSources.albumService.updateAlbum(id, {name, released, artistsIds, bandsIds, trackIds, genresIds, image});
    },
    deleteAlbum: async (_, {id}, { dataSources }) => {
      return dataSources.albumService.deleteAlbum(id);
    }
  },
  Album: {
    artists(parent, _, { dataSources }) {
      const artists = parent.artistsIds.map((id: string) => dataSources.artistService.getArtistById(id));
      return artists;
    },
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id: string) => dataSources.bandService.getBandById(id));
      return bands;
    },
    genres: async (parent, _, { dataSources }) => {
      const genres = parent.genresIds.map((id: string) => dataSources.genreService.getGenreById(id));
      return genres;
    },
    tracks(parent, _, { dataSources }) {      
      const tracks = parent.trackIds.map((id: string) => dataSources.trackService.getTrackById(id));
      return tracks;
    }
  }
}