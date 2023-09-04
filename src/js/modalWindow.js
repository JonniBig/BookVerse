(() => {
  const refs = {
    openModalBtn: document.querySelector('#openModalLink'),
    closeModalBtn: document.querySelector('.modalWindow-btn'),
    modalWindow: document.querySelector('.modalWindow'), // Перейменуйте modal на modalWindow
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalWindow.classList.toggle('is-hidden');
  }
})();
