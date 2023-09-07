// import axios from 'axios';
// import fetchAndDisplayBooks from './categories-book.js';

// const BASE_URL = 'https://books-backend.p.goit.global/';
// const categoriesContainer = document.querySelector('.categories');

// async function fetchCategories() {
//   try {
//     const { data: categories } = await axios.get(
//       `${BASE_URL}books/category-list`
//     );
//     const categoriesAll = { list_name: 'All categories' };
//     categories.unshift(categoriesAll);
//----------------------------------------------
import axios from 'axios';
import fetchAndDisplayBooks from './categories-book.js';

const BASE_URL = 'https://books-backend.p.goit.global/';
const categoriesContainer = document.querySelector('.categories');

async function fetchCategories() {
  try {
    const { data: categories } = await axios.get(
      `${BASE_URL}books/category-list`
    );

    const categoriesAll = { list_name: 'All categories' };

    categories.sort((a, b) => a.list_name.localeCompare(b.list_name));
    categories.unshift(categoriesAll);

    renderCategories(categories);

    const firstCategoryLink = categories[0].categoryLink;
    if (firstCategoryLink) firstCategoryLink.classList.add('active-category');
  } catch (error) {
    console.error('Помилка при отриманні категорій:', error);
  }
}

async function renderCategories(categories) {
  categoriesContainer.innerHTML = '';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('book_list');

  categories.forEach(category => {
    const { list_name: categoryName } = category;
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('category_item');
    const categoryLink = document.createElement('p');
    categoryLink.setAttribute('aria-label', categoryName);
    categoryLink.textContent = categoryName;

    categoryLink.addEventListener('click', async () => {
      await fetchAndDisplayBooks(categoryName);

      categories.forEach(cat =>
        cat.categoryLink.classList.remove('active-category')
      );

      categoryLink.classList.add('active-category');
    });

    categoryLink.classList.add('category_link');

    ['focus', 'blur', 'mouseover', 'mouseout'].forEach(eventType => {
      categoryLink.addEventListener(eventType, () => {
        if (eventType === 'focus' || eventType === 'mouseover') {
          categoryLink.classList.add('uppercase');
        } else {
          categoryLink.classList.remove('uppercase');
        }
      });
    });

    category.categoryLink = categoryLink;

    categoryItem.appendChild(categoryLink);
    categoryList.appendChild(categoryItem);
  });

  categoriesContainer.appendChild(categoryList);
}

fetchCategories();
