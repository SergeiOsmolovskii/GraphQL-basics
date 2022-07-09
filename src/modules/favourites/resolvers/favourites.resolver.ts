export const favouritesResolver = {
  Query: {
    favourites: async (_, __, { dataSources, token }) => {
      return dataSources.favouritesService.getFavourites(token);
    }
  },
  Mutation: {
    addTrackToFavourites: async (_, { trackId }, { dataSources }) => {
      return dataSources.favouritesService.addTrackToFavourites(trackId);
    },
    addBandToFavourites: async (_, { bandId }, { dataSources }) => {
      return dataSources.favouritesService.addBandToFavourites(bandId);
    },
    addArtistToFavourites: async (_, { artistId }, { dataSources }) => {
      return dataSources.favouritesService.addArtistToFavourites(artistId);
    },
    addGenreToFavourites: async (_, { genreId }, { dataSources }) => {
      return dataSources.favouritesService.addGenreToFavourites(genreId);
    }
  },
  Favourites: {
    tracks: async (parent, _, { dataSources }) => {
      const tracks = parent.tracksIds.map(async (trackId) => {
        return dataSources.trackService.getTrackById(trackId);
      });
      return tracks;
    },
    bands: async (parent, _, { dataSources }) => {
      const bands = parent.bandsIds.map(async (bandId) => {
        return dataSources.bandService.getBandById(bandId);
      });
      return bands;
    },
    artists: async (parent, _, { dataSources }) => {
      const artists = parent.artistsIds.map(async (artistId) => {
        return dataSources.artistService.getArtistById(artistId);
      });
      return artists;
    },
    genres: async (parent, _, { dataSources }) => {
      const genres = parent.genresIds.map(async (genreId) => {
        return dataSources.genreService.getGenreById(genreId);
      });
      return genres;
    }
  }
}