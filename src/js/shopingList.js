import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
import '../css/pagination-styles.css';

const listCards = document.querySelector('.book-shop-list');
const emptyList = document.querySelector('.empty-list');
const container = document.querySelector('.tui-pagination');

const itemsPerPage = 3;
let currentPage = 1;

const savedData = JSON.parse(localStorage.getItem('ListOfBooks'));
addCard(currentPage);

function addCard(page) {
  if (savedData.length === 0) {
    checkEmptyList();
    return;
  }
  prepareCard();

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageBooks = savedData.slice(startIndex, endIndex);
  listCards.insertAdjacentHTML('beforeend', makeMarkup(pageBooks));

  document
    .querySelectorAll('.icon-damp')
    .forEach(item => item.addEventListener('click', deleteCard));
}



let options = {
  totalItems: savedData.length,
  itemsPerPage,
  visiblePages: 2,
  centerAlign: true,
  usageStatistics: false,
  template: {
    page: '<a href="#" class="tui-page-btn custom-page">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn custom-is-selected tui-is-selected">{{page}} </strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
applyStylesForScreenSize();
const myPagination = new Pagination(container, options);
myPagination.on('beforeMove', eventData => {
  currentPage = eventData.page;
  addCard(currentPage);
});



function deleteCard(evt) {
  evt.preventDefault();
  const cardId = evt.currentTarget.id;
  const cardIndex = savedData.findIndex(option => option._id === cardId);
  savedData.splice(cardIndex, 1);
  localStorage.removeItem('ListOfBooks');
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  myPagination.on('beforeMove', eventData => {
  currentPage = eventData.page;
  });

  navigateToPreviousPage(savedData);
  
}

function navigateToPreviousPage(arr) {
  const totalPages = Math.ceil(arr.length / itemsPerPage);
  if (totalPages === 1) {
    container.classList.add('is-hidden')
  }
  if (currentPage > totalPages) {
    currentPage = totalPages;
    myPagination.reset(arr.length)
    myPagination.movePageTo(currentPage);

  }
  addCard(currentPage);
  }

// --------------------Функція створення розмітки картки книги
function makeMarkup(arr) {
  return arr
    .flatMap(
      ({ book_image, title, list_name, description, author, buy_links, _id }) =>
        `<li class="shop-list-item">
             <img

             src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/dump.png"

             alt="Close button"
             class="icon-damp"
             loading="lazy"
             width="28px"
             height: 28px;
             id="${_id}"
             />
         
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

function checkEmptyList() {
  emptyList.classList.remove('is-hidden');
  listCards.innerHTML = '';
  listCards.classList.add('is-hidden');
  container.classList.add('is-hidden');
}

function prepareCard() {
  listCards.classList.remove('is-hidden');
  // container.classList.remove('is-hidden');
  emptyList.classList.add('is-hidden');
  listCards.innerHTML = '';
}


function applyStylesForScreenSize() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    options.visiblePages = 2;
  } else  {
    options.visiblePages = 3;
  }
  }

