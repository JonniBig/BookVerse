import axios from 'axios';

const bestSellers = document.querySelector('.bestseller');

const URL = 'https://books-backend.p.goit.global/books/top-books';
export async function fetchBookShelf() {
  const response = await axios.get(URL);
  // console.log(response.data);
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

  // console.log(books);
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
}

export function renderBook({ book_image, title, author }) {
  return `<img width="218" height="auto" src="${book_image}" alt="${title}"/>
    <div'>
      <p>${title}</p>
      <p>${author}</p>
    </div>`;
}

