import axios from 'axios';

const scrollControl = {
  scrollPosition: 0,
  disabledScroll() {
    scrollControl.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: auto;
      position: fixed;
      top: -${scrollControl.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollControl.scrollPosition });
  },
};

let fetchedObj = null;
let bookId = 0;
let savedBooks = [];
if (localStorage.getItem('ListOfBooks') === null) {
  localStorage.setItem('ListOfBooks', JSON.stringify(savedBooks));
}

const refs = {
  openModal: document.querySelector('.right-wrapper'),
  closeModal: document.querySelector('.modalWindow-close'),
  modalWindow: document.querySelector('#modalWindow'),
  modalCard: document.querySelector('.modal-card'),
  modalBtnEl: document.querySelector('.modalWindow-btn'),
  markupCard:document.querySelector('.modal-card'),
};

refs.openModal.addEventListener('click', openModalWindow);
refs.closeModal.addEventListener('click', closeModalWindow);

function openModalWindow(evt) {
  evt.preventDefault();
  const clickedElement = evt.target;
  const closestLi = clickedElement.closest('.book-item');
  if (!closestLi) {
    return;
  }
  refs.modalWindow.classList.remove('is-hidden');
  scrollControl.disabledScroll();
  window.addEventListener('keydown', onEscPressed);
  refs.modalWindow.addEventListener('click', onBackdropclick);

  bookId = closestLi.id;
  getBookOnId(bookId).then(data => {
    makeMarkupModal(data);
    fetchedObj = data;
  });
}

function closeModalWindow(evt) {
  refs.modalWindow.classList.add('is-hidden');
  scrollControl.enabledScroll();
  window.removeEventListener('keydown', onEscPressed);
  modalWindow.removeEventListener('click', onBackdropclick);
}

function onBackdropclick(evt) {
  if (evt.currentTarget === evt.target) {
    closeModalWindow();
  }
}

function onEscPressed(evt) {
  const ESC_KEY = 'Escape';
  if (evt.code === ESC_KEY) {
    closeModalWindow();
  }
}

async function getBookOnId(id) {
  const url = 'https://books-backend.p.goit.global/books/';
  try {
    // Запит на бекенд за допомогою axios
    const getData = await axios.get(`${url}${id}`);
    return getData.data;
  } catch (error) {
    console.log(error);
  }
}

refs.modalBtnEl.addEventListener('click', bookAndStorage);
function bookAndStorage() {
  console.log(fetchedObj)
    savedBooks = JSON.parse(localStorage.getItem('ListOfBooks'));
    savedBooks.push(fetchedObj);
    localStorage.setItem('ListOfBooks', JSON.stringify(savedBooks));
 
}


function makeMarkupModal(obj) {
  refs.markupCard.innerHTML = '';
  const { book_image, title, list_name, description, author, buy_links, _id } = obj;
  const modalMarkup =
    `    <img
             src="${book_image}"
             alt="${title}"
             class="modal-book-img"
             loading="lazy"
             width="287px"
             height: 408px;
             />         
          <div class="modal-info-box">
           <h3 class="modal-book-title">${title}</h3>
           <p class="modal-book-author">${author}</p>
           <p class="modal-book-deskr" id="style-4">${description}</p>  
             <div class="modal-book-links">
               <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Amazon">
                 <img src="./images/shopingList/amazon-62.png" alt="Logo Amazon" width="62px" class="link-1"/>
               </a>
               <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="./images/shopingList/apple.png" alt="Logo Apple book store" width="28px" class="link-2"/>
               </a>
               <a href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="./images/shopingList/book_shop-62.png" alt="Logo book shop" width="32px" class="link-3"/>
               </a>
             </div>
          </div>`;
  refs.markupCard.insertAdjacentHTML('beforeend', modalMarkup);
 }