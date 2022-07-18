export const genreResolver = { 
  Query: {
    genres: async (_, {limit, offset}, { dataSources }) => {
      return dataSources.genreService.getAllGeners(limit, offset);
    },
    genre: async (_, {id}, { dataSources }) => {
      return dataSources.genreService.getGenreById(id);
    }
  },
  Mutation: {
    createGenre: async (_, {name, description, country, year}, { dataSources }) => {      
      return dataSources.genreService.createGenre({name, description, country, year});
    },
    updateGenre: async (_, {id, name, description, country, year}, { dataSources }) => {
      return dataSources.genreService.updateGenre(id, {name, description, country, year});
    },
    deleteGenre: async (_, {id}, { dataSources }) => {
      return dataSources.genreService.deleteGenre(id);
    }
  }
}