import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
import '../css/pagination-styles.css';
// ----------------Створюємо посилання на елементи розмітки
const listCards = document.querySelector('.book-shop-list');
const emptyList = document.querySelector('.empty-list');
const container = document.querySelector('.tui-pagination');
// -------------Отримаємо зі сховища масив книжок
const savedData = JSON.parse(localStorage.getItem('ListOfBooks'));
// --------------Початкові параметри пагінації
const itemsPerPage = 3;
let currentPage = 1;

// -------------Виклик функції створення розмітки карток
addCard(currentPage);
// -----------Функція виводу збережених карток
function addCard(page) {
  // -------Перевірка наявності даних в сховищі
  if (savedData.length === 0) {
    checkEmptyList();
    return;
  }
  prepareCard();


// ---------Вирізаємо з масиву задану кількість об'єктів для створення розмітки
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageBooks = savedData.slice(startIndex, endIndex);
  // --------------Заповнюємо контейнер картками
  listCards.insertAdjacentHTML('beforeend', makeMarkup(pageBooks));
  // -----------------Прослуховування подій на кнопках видалення книжки зі сховища
  document
    .querySelectorAll('.icon-damp')
    .forEach(item => item.addEventListener('click', deleteCard));
}

// -------------Набір опцій для tui-pagination з розміткою для кнопок
let options = {
  totalItems: savedData.length,
  itemsPerPage,
  visiblePages: 2,
  centerAlign: true,
  usageStatistics: false,
  template: {
    page: '<a href="#"  id="identified" class="tui-page-btn custom-page">{{page}}</a>',
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
// -------------------Зміна конфігурації відображення пагінації відповідно до ширини екрану(працює статично)
applyStylesForScreenSize();
// ----------------Запускаємо пагінацію карток в сховищі
const myPagination = new Pagination(container, options);
// при зміні номеру сторінки запускаємо функцію створення нової порції карток на новій сторінці
myPagination.on('beforeMove', eventData => {
  currentPage = eventData.page;
  addCard(currentPage);
});
  // ---------Розраховуємо загальну к-сть сторінок
  const totalPages = Math.ceil(savedData.length / itemsPerPage);
  // ---------Якщо залишилась тільки одна сторінка ховаємо пагінацію
  if (totalPages === 1) {
    container.classList.add('is-hidden');
  }
// -------------Функція видалення картки
function deleteCard(evt) {
  evt.preventDefault();
  // ------Отримвємо id  номер картки
  const cardId = evt.currentTarget.id;
  // ---------Згідно номеру отримає індекс картки в масиві
  const cardIndex = savedData.findIndex(option => option._id === cardId);
  // Вирізаємо з масиву необхідний об'єкт
  savedData.splice(cardIndex, 1);
  // --------Очищаємо сховище
  localStorage.removeItem('ListOfBooks');
  // ---------Записуємо в сховище новий масив об'єктів
  localStorage.setItem('ListOfBooks', JSON.stringify(savedData));
  // --------------Визначаємо поточний номер сторінки
  myPagination.on('beforeMove', eventData => {
    currentPage = eventData.page;
  });
  // ------------Виконуємо функцію перевірки кількості карток і у випадку коли всі картки зі сторінки видалені, переходимо на -1 сторінку і видаляємо з пагінації порожню сторінку
  navigateToPreviousPage(savedData);
}
// -------------Функція перевірки відповідності к-сті карток к-сті видимих сторінок, якщо залишилась тільки одна сторінка пагінацію ховаємо
function navigateToPreviousPage(arr) {
  // ---------Розраховуємо загальну к-сть сторінок
  const totalPages = Math.ceil(arr.length / itemsPerPage);
  // ---------Якщо залишилась тільки одна сторінка ховаємо пагінацію
  if (totalPages === 1) {
    container.classList.add('is-hidden');
  }
  // Якщо номер поточної сторінки більше макс. кількості, приймаємо макс номер за поточний
  if (currentPage > totalPages) {
    currentPage = totalPages;
    // ------Перезавантажуємо пагінацію для перерахунку кількості сторінок
    myPagination.reset(arr.length);
    // ---------Переходимо на -1 сторінку, якщо поточна без карток
    myPagination.movePageTo(currentPage);
  }
  // --------Перемальовуємо картки на новій сторінці
  addCard(currentPage);
}

// --------------------Функція створення розмітки картки книги
function makeMarkup(arr) {
  return arr
    .flatMap(
      ({ book_image, title, list_name, description, author, buy_links, _id }) =>
        `<li class="shop-list-item">
             <img
             srcset="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/dump.png"
             src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/dump.png"

             alt="Close button"
             class="icon-damp"
             loading="lazy"
             width="28px"
             height: 28px;
             id="${_id}"
             />
         
           <img
             srcset="${book_image}"
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
                 <img srcset="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png"
                 src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/amazon.png" loading="lazy"
                 alt="Logo Amazon" width="32px" class="link-1"/>
               </a>
               <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Apple book shop">
                 <img srcset="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" 
                 src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/apple.png" loading="lazy" alt="Logo Apple book store" width="16px" class="link-2"/>
               </a>
               <a href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener" aria-label="Link to Book shop">
                 <img src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop.png"
                  src="https://raw.githubusercontent.com/JonniBig/BookVerse/main/src/images/shopingList/book_shop.png" loading="lazy" alt="Logo book shop" width="16px" class="link-3"/>
               </a>
             </div>
           </div>
          </div>
        </li>`
    )
    .join(' ');
}
// -------------налаштування сторінки при відсутності книжок
function checkEmptyList() {
  emptyList.classList.remove('is-hidden');
  listCards.innerHTML = '';
  listCards.classList.add('is-hidden');
  container.classList.add('is-hidden');
}
// -------------налаштування сторінки перед розміткою карток
function prepareCard() {
  listCards.classList.remove('is-hidden');
  emptyList.classList.add('is-hidden');
  listCards.innerHTML = '';
}
// ------------Функція зміни макс. к-сті видимих сторінок з номером згідно макету
function applyStylesForScreenSize() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    options.visiblePages = 2;
  } else {
    options.visiblePages = 3;
  }
}
