import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});