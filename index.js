import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { apolloSettings } from './schema/schema.js';

const server = new ApolloServer(apolloSettings);
const { url } = await startStandaloneServer(
  server,
  { listen: { port: 4000 } }
);

console.log(`🚀 Server ready at ${url}`);
export {};
