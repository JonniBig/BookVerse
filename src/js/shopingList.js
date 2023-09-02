import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const listCards = document.querySelector('.book-shop-list');
const emptyList = document.querySelector('.empty-list');
const container = document.querySelector('.tui-pagination');

async function getBook() {
  const url = 'https://books-backend.p.goit.global/books/top-books';
  try {
    // Запит на бекенд за допомогою axios
    const getData = await axios.get(`${url}`);
    return getData.data;
  } catch (error) {
    console.log(error);
  }
}

getBook().then(data => {
  localStorage.removeItem('ListofBooks');
  const savedBook = data[10].books;
  localStorage.setItem('ListOfBooks', JSON.stringify(savedBook));
});
const savedData = JSON.parse(localStorage.getItem('ListOfBooks'));

function addCard() {
  if (savedData.length === 0) {
    emptyList.classList.remove('is-hidden');
    localStorage.removeItem('ListofBooks');
    listCards.innerHTML = '';
    listCards.classList.add('is-hidden');
    return;
  }
  listCards.classList.remove('is-hidden');
  emptyList.classList.add('is-hidden');
  listCards.innerHTML = '';
  listCards.insertAdjacentHTML('beforeend', makeMarkup11(savedData));
  // const options = {
  //   totalItems: 10,
  //   itemsPerPage: 2,
  //   visiblePages: 3,
  //   page: 1,
  //   centerAlign: true,
  //   firstItemClassName: 'tui-first-child',
  //   lastItemClassName: 'tui-last-child',
  // };

  // const myPagination = new Pagination(container, options);
  const dumpEl = document.querySelectorAll('.icon-damp').forEach(item=>item.addEventListener('click', deleteCard));
}

function deleteCard(evt) {
  evt.preventDefault();
  const cardId = evt.target.id;
  const cardIndex = savedData.findIndex(option => option._id === cardId);
  savedData.splice(cardIndex, 1);
  localStorage.removeItem('ListofBooks');
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  addCard();

}

function makeMarkup11(arr) {
  return arr
    .flatMap(
      ({ book_image, title, list_name, description, author, buy_links, _id }) =>
        `<li class="shop-list-item">
              <svg class="icon-damp" width="28" height="28">
                <use href="./images/icomoon.svg#icon-dump" id="${_id}"></use>
              </svg>
         <img
           src="${book_image}"
           alt="${title}"
           class="shop-book-img"
           loading="lazy"
           width="100px"
           height="142px"
         />
          <div class="info-box">
           <h3 class="book-title">${title}</h3>
           <p class="book-category">${list_name}</p>
           <p class="book-deskr" id="style-4">${description}</p>
           <div class="bottom-card-book">
             <p class="book-author">${author}</p>
             <div class="book-links">
               <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="./images/shopingList/amazon.png" alt="Logo Amazon" width="32px" />
               </a>
               <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="./images/shopingList/apple.png" alt="Logo Apple book store" width="16px" />
               </a>
               <a href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="./images/shopingList/book_shop.png" alt="Logo book shop" width="16px"/>
               </a>
             </div>
           </div>
          </div>
        </li>`
    )
    .join(' ');
}

addCard();
