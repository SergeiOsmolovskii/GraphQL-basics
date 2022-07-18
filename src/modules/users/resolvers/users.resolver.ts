export const userResolver = { 
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userService.getUserById(id);
    }
  },
  Mutation: {
    createUser: async (_, { firstName, lastName, password, email }, { dataSources }) => { 
      return dataSources.userService.createUser({firstName, lastName, password, email});
    }
  }
}