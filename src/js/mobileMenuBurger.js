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

// Переключання стилю на активних сторінках мобільного меню
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const menuItemHome = document.querySelector('.mobil-nav-item-home');
  const menuItemShopping = document.querySelector('.mobil-nav-item-shopping');
  const iconShoppingBag = document.querySelector('.mobil-lock');

  if (currentPage.includes('index.html')) {
    menuItemHome.classList.add('mobil-nav-item-active');
    menuItemShopping.classList.remove('mobil-nav-item-active'); // Знімаємо активний стиль з "Shopping list"
    iconShoppingBag.classList.remove('mobil-lock-active'); // Знімаємо активний стиль для іконки
  } else if (currentPage.includes('shopping-list.html')) {
    menuItemShopping.classList.add('mobil-nav-item-active');
    menuItemHome.classList.remove('mobil-nav-item-active'); // Знімаємо активний стиль з "Home"
    iconShoppingBag.classList.add('mobil-lock-active'); // Додаємо активний стиль для іконки
  }
});

// Переключання стилю на активних сторінках головної сторінки
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const navItemHome = document.querySelector('.nav-item-home');
  const navItemShopping = document.querySelector('.nav-item-shopping');
  const navLockIcon = document.querySelector('.nav-lock');

  function setActiveMenuItem(currentPage) {
    if (currentPage.includes('index.html')) {
      // Якщо поточна сторінка - Home
      navItemHome.classList.add('nav-item-active');
      navItemShopping.classList.remove('nav-lock-active');
      navLockIcon.classList.remove('nav-lock-active');
    } else if (currentPage.includes('shopping-list.html')) {
      // Якщо поточна сторінка - Shopping List
      navItemShopping.classList.add('nav-item-active');
      navItemHome.classList.remove('nav-item-active');
      navLockIcon.classList.adde('nav-lock-active');
    }
  }

  setActiveMenuItem(currentPage);
});
