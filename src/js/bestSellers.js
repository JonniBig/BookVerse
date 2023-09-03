import axios from 'axios';
import fetchAndDisplayBooks from './categories-book';

const bestSellers = document.querySelector('.bestseller');
const btnSeeMore = document.querySelector('.see-more');

const URL = 'https://books-backend.p.goit.global/books/top-books';
export async function fetchBookShelf() {
  const response = await axios.get(URL);

  return response.data;
}
fetchBookShelf();

async function getBooks(data) {
  try {
    const response = await fetchBookShelf(data);

    response.map(listBooks => {
      return createMarkupBookShelf(listBooks);
    });
  } catch (error) {
    console.error('Try again!');
  }
}

getBooks();

export function createMarkupBookShelf(category) {
  const { list_name, books } = category;

  const arrBookShelf = `
  <div class="best_list">
    <h2 class="best_list_name">${list_name}</h2>
     <ul>
         ${books
           .map(book => {
             return renderBook(book);
           })
           .join('')}
      </ul>
      <button type="button" class="see-more">SEE MORE</button>
  </div>
  `;

  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf);

  const seeMoreButton = bestSellers.querySelector('.see-more:last-of-type');
  seeMoreButton.addEventListener('click', () => {
    fetchAndDisplayBooks(list_name);
  });
}

btnSeeMore.addEventListener('click', fetchAndDisplayBooks(categoryName));
export function renderBook({ book_image, title, author }) {
  return `<img class="book-wrap" src="${book_image}" alt="${title}"/>
    <div'>
      <p class="book-name">${title}</p>
      <p class="book-author">${author}</p>
    </div>`;
}
