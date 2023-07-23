import { books } from './books.js';
const libraryNames = [
  {
    name: 'Seattle Public Library',
  },   
  { 
    name: 'King County Library System',
  },
  ];

const libraries = libraryNames.map((library) => {
  const libraryBooks = 
    books.filter(
      (book) => book.libraries.some(
        (library) => library.name === library.name));
  return {
    ...library,
    books: libraryBooks,
  };
});

export { libraries };
