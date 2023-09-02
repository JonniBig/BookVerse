import axios from 'axios';

const bestSellers = document.querySelector('.bestseller');

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

export function createMarkupBookShelf(books) {
  const { list_name, book_image, author, title } = books;

  const arrBookShelf = `
  <div class="best_list">
    <h2 class="best_list_name">${list_name}</h2>
    <div class="best_list_item">
      <a class="best_list_link" href="${book_image}">
         <img src="${book_image}" alt="${title}" width="300" loading="lazy" />
      </a>
      <p class="best_list_title">${title}</p>
      <p class="best_list_author">${author}</p>
    </div>
  </div>`;

  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf);
}
