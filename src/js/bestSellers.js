import axios from 'axios';

const bestSellers = document.querySelector('.bestseller_list');

const URL = 'https://books-backend.p.goit.global/books/top-books';
export async function fetchBookShelf() {
  const response = await axios.get(URL);

  return response.data;
}

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
    <div class="best_list_card>
     <ul class="best_card">
         ${books
           .map(book => {
             return renderBook(book);
           })
           .join('')}
      </ul>
    </div> 
  </div>`;

  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf);
}

export function renderBook({ book_image, title, author }) {
  return `<img width="218" height="auto" src="${book_image}" alt="${title}"/>
    <div'>
      <p>${title}</p>
      <p>${author}</p>
    </div>`;
}
fetchBookShelf();
