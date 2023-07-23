import fs from 'fs';
import { data } from '../data/data.js';

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf8').toString();

const { authors, books, libraries, genres } = data;
const resolvers = {
  Query: {
    authors: () => authors.data,
    books: () => books,
    libraries: () => libraries,
    genres: () => genres,
  }
};

const apolloSettings = {  typeDefs,  resolvers };
export { apolloSettings };
