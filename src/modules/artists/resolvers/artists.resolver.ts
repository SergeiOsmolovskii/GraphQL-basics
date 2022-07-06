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
    createArtist: async (_, {firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments}, { dataSources }) => {
      return dataSources.artistService.createArtist({firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments});
    },
    updateArtist: async (_, {id, firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments}, { dataSources }) => {
      return dataSources.artistService.updateArtist(id, {firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments});
    },
    deleteArtist: async (_, {id}, { dataSources }) => {
      return dataSources.artistService.deleteArtist(id);
    }
  }
}