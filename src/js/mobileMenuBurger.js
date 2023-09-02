const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});

// Переключання стилю на активних сторінках
document.addEventListener('DOMContentLoaded', function () {
  var currentPage = window.location.pathname;

  var menuItemHome = document.querySelector('.mobil-nav-item-home');
  var menuItemShopping = document.querySelector('.mobil-nav-item-shopping');
  var iconShoppingBag = document.querySelector('.mobil-lock');

  if (currentPage.includes('index.html')) {
    menuItemHome.classList.add('mobil-nav-item-active');
    iconShoppingBag.classList.add('mobil-lock-active');
  } else if (currentPage.includes('shopping-list.html')) {
    menuItemShopping.classList.add('mobil-nav-item-active');
  }
});
