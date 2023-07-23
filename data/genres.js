import { books } from './books.js';
const genreNames = [
  {
    name: 'Fantasy',
  },
  {
    name: 'Philosophical Fiction',
  },
  ];

const genres = genreNames.map((genre) => {
  const genreBooks = books.filter((book) => book.genre.name === genre.name);
  return {
    ...genre,
    books: genreBooks,
  };
}
);

export { genres };
