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
        <button type="button" class="see-more" data-category="${list_name}">SEE MORE</button>
      </div>
  </div>
  `;
  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf);

  bindSeeMoreEvent();
}

function bindSeeMoreEvent() {
  if (bestSellers._seeMoreBound) return;

  //----------------------------
  const seeMoreButtons = document.querySelectorAll('.see-more');

  seeMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const categoryName = button.getAttribute('data-category');
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
    });
  });
}

//----------------------------

//   bestSellers.addEventListener('click', async event => {
//     if (event.target.classList.contains('see-more')) {
//       const categoryName = event.target.getAttribute('data-category');
//       try {
//         await fetchAndDisplayBooks(categoryName);
//       } catch (error) {
//         console.error('Error handling book click:', error);
//       }
//     }
//   });
//   bestSellers._seeMoreBound = true;

//--------------------------------

export function renderBook({ book_image, title, author, _id }) {
  return `
  <li class="book-item" id="${_id}">
    <a href="" class="best-img-link">
      <img class="book-wrap" src="${book_image}" alt="${title}" loading="lazy"/>
        <div class="book-info-block">
          <p class="view">quick view</p>
          <p class="book-name">${title}</p>
          <p class="book-author">${author}</p>
        </div>
    </a>
  </li>`;
}
