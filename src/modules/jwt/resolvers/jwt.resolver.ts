export const jwtResolver = {
  Query: {
    jwt: async (_, { email, password }, { dataSources }) => {
      return dataSources.JwtService.login(email, password);
    }
  }
} 