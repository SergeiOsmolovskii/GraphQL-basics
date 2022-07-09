export const bandResolver = {
  Query: {
    bands: async (_, {limit, offset}, { dataSources }) => {
      return dataSources.bandService.getAllBands(limit, offset);
    },
    band: async (_, {id}, { dataSources }) => {
      return dataSources.bandService.getBandById(id);
    }
  },
  Mutation: {
    createBand: async (_, {name, origin, members , website, genres}, { dataSources }) => {
      return dataSources.bandService.createBand({name, origin, members, website, genres});
    },
    updateBand: async (_, {id, name, origin, members , website, genres}, { dataSources }) => {
      return dataSources.bandService.updateBand(id, {name, origin, members, website, genres});
    },
    deleteBand: async (_, {id}, { dataSources }) => {
      return dataSources.bandService.deleteBand(id);
    }
  }, 
  Band: {
    genres: async (parent, _, { dataSources }) => {     
      const genres = parent.genresIds.map((id) => dataSources.genreService.getGenreById(id));
      return genres;
    },
  },
}