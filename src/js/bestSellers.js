import axios from 'axios';
import fetchAndDisplayBooks from './categories-book';

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
  // loader
  const loader = document.querySelector('.loader');

  loader.style.display = 'none';

  const arrBookShelf = `
  <div class="best-list">
    <h3 class="best-list-name">${list_name}</h3>
      <ul class="best-book-category books-is-hidden">
         ${books
           .map(book => {
             return renderBook(book);
           })
           .join('')}
      </ul>
      <div class="btn-see-more">
        <button type="button" aria-label="see more" class="see-more" data-category="${list_name}">SEE MORE</button>
      </div>
  </div>
  `;
  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf);

  bindSeeMoreEvent();
}
let seeMoreBound = false;
function bindSeeMoreEvent() {
  if (seeMoreBound) return;
  const seeMoreContainer = document.querySelector('.bestseller'); // Контейнер, що містить кнопки "see-more"
  seeMoreContainer.addEventListener('click', event => {
    if (event.target.classList.contains('see-more')) {
      const categoryName = event.target.getAttribute('data-category');
      fetchAndDisplayBooks(categoryName);
      const categoryLinks = document.querySelectorAll(
        '.categories .category_link'
      );
      categoryLinks.forEach(link => {
        if (link.textContent === categoryName) {
          link.classList.add('active-category');
        } else {
          link.classList.remove('active-category');
        }
      });
    }
  });
  seeMoreBound = true;
}
export function renderBook({ book_image, title, author, _id }) {
  const imageSrc = book_image ? book_image : 'https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/plug picture/plug335x485@1x.jpg';
  return `
  <li class="book-item" id="${_id}">

    <a href= "${book_image}" aria-label="${title}" class="best-img-link">
      <img class="book-wrap" srcset="${book_image}" src="${book_image}" alt="${title}" loading="lazy"/>

        <div class="book-info-block">
          <p class="view">quick view</p>
          <p class="book-name">${title}</p>
          <p class="book-author">${author}</p>
        </div>
    </a>
  </li>`;
}
