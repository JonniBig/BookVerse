// -------------Імпорт бібліотеки Axios------------
import axios from 'axios';
// -----------------Створюємо методи об'єкту для вимкнення скролу фону
const scrollControl = {
  scrollPosition: 0,
  disabledScroll() {
    scrollControl.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
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
// ----------вводимо змінні
let fetchedObj = null;
let bookId = 0;
let savedBooks = [];
// -------------Перевірка сховища на наявність ключа, та створення якщо відсутній
if (localStorage.getItem('ListOfBooks') === null) {
  localStorage.setItem('ListOfBooks', JSON.stringify(savedBooks));
}
// ---------------Посилання на елементи DOM
const refs = {
  openModal: document.querySelector('.right-wrapper'),
  closeModal: document.querySelector('.modalWindow-close'),
  modalWindow: document.querySelector('#modalWindow'),
  modalCard: document.querySelector('.modal-card'),
  modalBtnAddEl: document.querySelector('.modalWindow-btn-1'),
  modalBtnDelEl: document.querySelector('.modalWindow-btn-2'),
  modaltextBottom: document.querySelector('.modalWindow-text'),
  markupCard: document.querySelector('.modal-card'),
};
// -------------Додаємо слухачів події відкриття та закриття модального вікна
refs.openModal.addEventListener('click', openModalWindow);
refs.closeModal.addEventListener('click', closeModalWindow);
// --------------Функція відкриття модального вікна
function openModalWindow(evt) {
  // --------------Заборона базових дій браузера
  evt.preventDefault();
  // ----------------Шукаємо через сплиття елемент списку з ID книжки для запиту на сервер
  const clickedElement = evt.target;
  const closestLi = clickedElement.closest('.book-item');
  // кщо не знайшли батька елемента з потрібними параметрами, значить клікнули поза карткою
  if (!closestLi) {
    return;
  }
  // ----------Прибираємо клас hidden та вимикаємо скрол, слухаємо події клавіатури та клік  за межами модального вікна
  refs.modalWindow.classList.remove('is-hidden');
  scrollControl.disabledScroll();
  window.addEventListener('keydown', onEscPressed);
  refs.modalWindow.addEventListener('click', onBackdropclick);

  bookId = closestLi.id;
  // ----------Перевірка наявності книги в сховищі
  const checkBook = JSON.parse(localStorage.getItem('ListOfBooks'));
  if (checkBook.find(option => option._id === bookId)) {
    refs.modalBtnAddEl.classList.add('is-hidden');
    refs.modalBtnDelEl.classList.remove('is-hidden');
    refs.modaltextBottom.classList.remove('is-hidden');
  } else {
    refs.modalBtnAddEl.classList.remove('is-hidden');
    refs.modalBtnDelEl.classList.add('is-hidden');
    refs.modaltextBottom.classList.add('is-hidden');
  }
  // -----------Виклик функції запиту з ID обраної книги та створення розмітки картки
  getBookOnId(bookId).then(data => {
    makeMarkupModal(data);
    fetchedObj = data;
  });
}
// --------------Функція закриття модального вікна
function closeModalWindow(evt) {
  refs.modalWindow.classList.add('is-hidden');
  scrollControl.enabledScroll();
  window.removeEventListener('keydown', onEscPressed);
  modalWindow.removeEventListener('click', onBackdropclick);
}
// ----------Функція кліку за межами модального вікна
function onBackdropclick(evt) {
  if (evt.currentTarget === evt.target) {
    closeModalWindow();
  }
}
// ---------------Функція закриття після натискання клавіші ESC
function onEscPressed(evt) {
  const ESC_KEY = 'Escape';
  if (evt.code === ESC_KEY) {
    closeModalWindow();
  }
}
// -------Асинхронна функція запиту на сервер
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
// ---------Прослуховування події кліку по кнопці Додати до сховища
refs.modalBtnAddEl.addEventListener('click', bookAddStorage);
// ------------Функція збереження обраної книги в сховищі
function bookAddStorage(evt) {
  evt.preventDefault();
  savedBooks = JSON.parse(localStorage.getItem('ListOfBooks'));
  savedBooks.push(fetchedObj);
  localStorage.setItem('ListOfBooks', JSON.stringify(savedBooks));
  refs.modalBtnAddEl.classList.add('is-hidden');
  refs.modalBtnDelEl.classList.remove('is-hidden');
  refs.modaltextBottom.classList.remove('is-hidden');
}

refs.modalBtnDelEl.addEventListener('click', bookDelStorage);
function bookDelStorage(evt) {
  evt.preventDefault();

  const savedData = JSON.parse(localStorage.getItem('ListOfBooks'));
  const cardIndex = savedData.findIndex(option => option._id === bookId);
  savedData.splice(cardIndex, 1);
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  refs.modalBtnAddEl.classList.remove('is-hidden');
  refs.modalBtnDelEl.classList.add('is-hidden');
  refs.modaltextBottom.classList.add('is-hidden');
}

function makeMarkupModal(obj) {
  refs.markupCard.innerHTML = '';
  const { book_image, title, description, author, buy_links } = obj;
  const modalMarkup = `    <img
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
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon-62.png" alt="Logo Amazon" width="62px" class="link-1"/>
               </a>
               <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" alt="Logo Apple book store" width="28px" class="link-2"/>
               </a>
               <a href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop-62.png" alt="Logo book shop" width="32px" class="link-3"/>
               </a>
             </div>
          </div>`;
  refs.markupCard.insertAdjacentHTML('beforeend', modalMarkup);
}
