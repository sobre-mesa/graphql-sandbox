import fs from 'fs';
import { data } from '../data/data.js';

const { authors, books, libraries, genres } = data;

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf8').toString();

const resolvers = {
  Query: {
    authors: () => authors,
    books: () => books,
    libraries: () => libraries,
    genres: () => genres,
  }
};

const apolloSettings = {  typeDefs,  resolvers };
export { apolloSettings };
