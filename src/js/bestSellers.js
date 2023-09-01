import axios from 'axios';

const bestSellers = document.querySelector('.bestseller');

const URL = 'https://books-backend.p.goit.global/books/top-books';
export async function fetchBookShelf() {
  const url = `${URL}`;
  const response = await axios.get(url);
  // console.log(response.data);
  return response.data;

}
fetchBookShelf();

async function getBooks(data) {
  try {
    const response = await fetchBookShelf(data);

    response.map((listBooks) => {
      console.log(listBooks);
      return createMarkupBookShelf(listBooks);
    })

  } catch (error) {
    console.error("Try again!");
  }
}

getBooks();

export function createMarkupBookShelf(book) {
  const {
    list_name,
    book_image,
    author,
    title,
} = book;
  const arrBookShelf = `
  <h1 class="title_books">Best Sellers <span class="">Books</span></h1>
  <div>${list_name}</div>`

  // const arrBookShelf = arr(
  //     ({
  //         list_name,
  //         book_image,
  //         author,
  //          title
          
    // }) => {
  //     return `<div class="photo-card">
  //       <div class="img_wrap">
  //           <a class="book_link" href="${book_image}">
  //               <img src="${}" alt="${}" width="300" loading="lazy" />
  //           </a>
  //       </div>
  //        <p class="title_bookshelf">${title}</p>
  //        <p class="author_bookshelf">${author}</p>
  //       </div>`;
  //   }
  // );
  bestSellers.insertAdjacentHTML('beforeend', arrBookShelf);
}