import fs from 'fs';
import { data } from '../data/data.js';

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf8').toString();

const { authors, books, libraries, genres } = data;
const resolvers = {
  Query: {
    authors: () => authors,
    books: () => books,
    libraries: () => libraries,
    genres: () => genres,
    getAuthorByName: (parent , args , contextValue, info) => { 
      return authors.find(x => x.name === args.name)
    }, 
  },
};

const apolloSettings = {  typeDefs,  resolvers };
export { apolloSettings };
