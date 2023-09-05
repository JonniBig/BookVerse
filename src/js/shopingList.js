import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const listCards = document.querySelector('.book-shop-list');
const emptyList = document.querySelector('.empty-list');
const container = document.querySelector('.tui-pagination');

let savedData = JSON.parse(localStorage.getItem('ListOfBooks'));
const itemsPerPage = 3;
let currentPage = 1;
addCard(currentPage);

function addCard(page) {
    if (savedData.length === 0) {
    chekIfEmpty();
    return;
  }
  prepareForMarkup();
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageForBooks = savedData.slice(startIndex, endIndex);
  // 
  if (pageForBooks.length === 0) {
    location.reload();
 }
  listCards.insertAdjacentHTML('beforeend', makeMarkup(pageForBooks));


  // -----------Накладаємо слухачі на кнопку видалення картки зі сховища
  const dumpEl = document
    .querySelectorAll('.icon-damp')
    .forEach(item => item.addEventListener('click', deleteCard));
}

  const options = {
    totalItems: savedData.length,
    itemsPerPage,
    visiblePages: 2,
    centerAlign: true,
  };
  const myPagination = new Pagination(container, options);

myPagination.on('beforeMove', eventData => {
  currentPage = eventData.page;
  addCard(currentPage);
});

function deleteCard(evt) {
  evt.preventDefault();
  const cardId = evt.target.id;
  const cardIndex = savedData.findIndex(option => option._id === cardId);
  savedData.splice(cardIndex, 1);
  localStorage.removeItem('ListOfBooks');
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  const checkLi=listCards.querySelector('.shop-list-item')
    addCard(currentPage);
}
// --------------------Функція створення розмітки картки книги
function makeMarkup(arr) {
  return arr
    .flatMap(
      ({ book_image, title, list_name, description, author, buy_links, _id }) =>
        `<li class="shop-list-item">
              <svg class="icon-damp" width="28" height="28">
                <use href="../images/icomoon.svg#icon-dump" id="${_id}"></use>
              </svg>         
           <img
             src="${book_image}"
             alt="${title}"
             class="shop-book-img"
             loading="lazy"
             width="100px"
             height: 142px;
             />
           <div class="info-box">
           <h3 class="book-title">${title}</h3>
           <p class="book-category">${list_name}</p>
           <p class="book-deskr" id="style-4">${description}</p>
           <div class="bottom-card-book">
             <p class="book-author-bottom">${author}</p>
             <div class="book-links">
               <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png" alt="Logo Amazon" width="32px" class="link-1"/>
               </a>
               <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" alt="Logo Apple book store" width="16px" class="link-2"/>
               </a>
               <a href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop.png" alt="Logo book shop" width="16px" class="link-3"/>
               </a>
             </div>
           </div>
          </div>
        </li>`
    )
    .join(' ');
}

function chekIfEmpty() {
  emptyList.classList.remove('is-hidden');
  listCards.innerHTML = '';
  listCards.classList.add('is-hidden');
  container.classList.add('is-hidden');
}

function prepareForMarkup() {
  listCards.classList.remove('is-hidden');
  container.classList.remove('is-hidden');
  emptyList.classList.add('is-hidden');
  listCards.innerHTML = '';
}
