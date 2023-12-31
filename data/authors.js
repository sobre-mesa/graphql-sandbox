import { books } from './books.js';

const authorsNames = [
  {
    name: 'pepe',
  },
  {
    name: 'Fedyor Dostoevsky',
  },
  {
    name: 'Herman Hesse',
  },
  ];

const authors = authorsNames.map((author) => {
  const authorBooks = books.filter((book) => book.author.name === author.name);
  return {
    ...author,
    books: authorBooks,
  };
});

export {  authors };
