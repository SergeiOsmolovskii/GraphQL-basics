import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import { resolversCollection } from './resolversСollection.js';
import { servicesCollection } from './servicesCollection.js';

import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const resolvers =  {
  ...resolversCollection
} 

const services = {
  ...servicesCollection
}

const server = new ApolloServer({
    typeDefs,
    resolvers, 
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => { 
      const token = req.headers.authorization || '';
      return { token };  
    },
    dataSources : () => {
      return services;
    },  
  });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);  
});