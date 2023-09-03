// import axios from 'axios';

// const modalInfoBook = document.querySelector('book-info');
// const takeBook = document.querySelector('button-to-shop');





// // Получите ссылку и модальное окно по их ID
// const openModalLink = document.getElementById('openModalWindow');
// const modal = document.getElementById('modalWindow');

// // Получите кнопку для закрытия модального окна
// const closeModalButton = document.getElementById('closeModalWindow');

// // Добавьте обработчик события для открытия модального окна
// openModalLink.addEventListener('click', function() {
//   modal.style.display = 'block';
// });

// // Добавьте обработчик события для закрытия модального окна
// closeModalButton.addEventListener('click', function() {
//   modal.style.display = 'none';
// });

// // Закрытие модального окна при клике вне него
// window.addEventListener('click', function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });



// function openModal() {
//     var modal = document.getElementById('myModal');
//     modal.style.display = 'block';
//   }
  
//   // Закривання модалки при натисканні на кнопку "Закрити"
//   document.querySelector('.close-btn').addEventListener('click', function () {
//     var modal = document.getElementById('myModal');
//     modal.style.display = 'none';
//   });
  
//   // Закривання модалки при натисканні поза його межами
//   window.onclick = function (event) {
//     var modal = document.getElementById('myModal');
//     if (event.target == modal) {
//       modal.style.display = 'none';
//     }
//   };


(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();