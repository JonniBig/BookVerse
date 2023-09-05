// import axios from 'axios';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

const listCards = document.querySelector('.book-shop-list');
const emptyList = document.querySelector('.empty-list');
const container = document.querySelector('.tui-pagination');

// async function getBook() {
//   const url = 'https://books-backend.p.goit.global/books/top-books';
//   try {
//     // Запит на бекенд за допомогою axios
//     const getData = await axios.get(`${url}`);
//     return getData.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getBook().then(data => {
//   localStorage.removeItem('ListofBooks');
//   const savedBook = data[15].books;
//   localStorage.setItem('ListOfBooks', JSON.stringify(savedBook));
// });

  const savedData = JSON.parse(localStorage.getItem('ListOfBooks'));
addCard();

function addCard() {

  if (savedData.length === 0) {
    emptyList.classList.remove('is-hidden');
    listCards.innerHTML = '';
    listCards.classList.add('is-hidden');
    return;
  }
  listCards.classList.remove('is-hidden');
  emptyList.classList.add('is-hidden');
  listCards.innerHTML = '';
  listCards.insertAdjacentHTML('beforeend', makeMarkup(savedData));
  // listCards.firstChild.classList.add('tui-first-child');
  // listCards.lastChild.classList.add('tui-last-child');
  // const options = {
  //   // totalItems: 5,
  //   itemsPerPage: 3,
  //   visiblePages: 2,
  //   page: 1,
  //   centerAlign: true,
  //   firstItemClassName: 'tui-first-child',
  //   lastItemClassName: 'tui-last-child',
  // };

  // const myPagination = new Pagination(container, options);
   document
    .querySelectorAll('.icon-damp')
    .forEach(item => item.addEventListener('click', deleteCard));
}

function deleteCard(evt) {
  evt.preventDefault();
  const cardId = evt.currentTarget.id;
  const cardIndex = savedData.findIndex(option => option._id === cardId);
  savedData.splice(cardIndex, 1);
  localStorage.removeItem('ListOfBooks');
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  addCard();
}
// --------------------Функція створення розмітки картки книги
function makeMarkup(arr) {
  return arr
    .flatMap(
      ({ book_image, title, list_name, description, author, buy_links, _id }) =>
        `<li class="shop-list-item">
             <img
             src="../images/shopingList/dump.png"
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


