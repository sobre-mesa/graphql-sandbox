import { books } from './books.js';

const authorsNames = [
  {
    name: 'J.K. Rowling',
  },
  {
    name: 'Fedyor Dostoevsky',
  },
  {
    name: 'Herman Hesse',
  },
  ];

const data = authorsNames.map((author) => {
  const authorBooks = books.filter((book) => book.author.name === author.name);
  return {
    ...author,
    books: authorBooks,
  };
});

const authors = {
  data,
  getByName: (name) => authors.find((author) => author.name === name),
}

export {  authors };
