export const artistResolver = {
  Query: {
    artists: async (_, {limit, offset}, { dataSources }) => {
      return dataSources.artistService.getAllArtists(limit, offset);
    },
    artist: async (_, {id}, { dataSources }) => { 
      return dataSources.artistService.getArtistById(id);
    }
  },
  Mutation: {
    createArtist: async (_, artist, { dataSources }) => {
      return dataSources.artistService.createArtist(artist);
    },
    updateArtist: async (_, {id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments}, { dataSources }) => {
      return dataSources.artistService.updateArtist(id, {firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments});
    },
    deleteArtist: async (_, {id}, { dataSources }) => {
      return dataSources.artistService.deleteArtist(id);
    }
  },
  Artist: { 
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id: string) => dataSources.bandService.getBandById(id));
      return bands;
    }
  }
}