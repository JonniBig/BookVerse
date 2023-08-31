import axios from 'axios';

const bestSellers = document.querySelector('.bestseller');

const URL = 'https://books-backend.p.goit.global/books/top-books';

export async function fetchBookShelf(data) {
  const url = `${URL}`;
  const response = await axios.get(url);
  return response.data;
}

export function createMarkupBookShelf(arr) {
  const arrBookShelf = arr.map(
      ({
          list_name,
          book_image,
          author,
          
    }) => {
      return `<div class="photo-card">
        <div class="img_wrap">
            <a class="book_link" href="${book_image}">
                <img src="${}" alt="${}" width="300" loading="lazy" />
            </a>
        </div>
         <p class="title_bookshelf">${title}</p>
         <p class="author_bookshelf">${author}</p>
        </div>`;
    }
  );
  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf.join(''));
}
