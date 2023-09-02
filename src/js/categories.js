import axios from 'axios';

import fetchAndDisplayBooks from './categories-book.js';


const BASE_URL = 'https://books-backend.p.goit.global/';

const categoriesContainer = document.querySelector('.categories');

async function fetchCategories() {
  try {
    const response = await axios.get(`${BASE_URL}books/category-list`);
    const categories = response.data;
    const categoriesAll = { list_name: 'All categories' };
    categories.unshift(categoriesAll);

    renderCategories(categories);

    const firstCategoryLink = categories[0].categoryLink;
    if (firstCategoryLink) {
      firstCategoryLink.classList.add('active-category');
    }
  } catch (error) {
    console.error('Помилка при отриманні категорій:', error);
  }
}

async function renderCategories(categories) {
  categoriesContainer.innerHTML = '';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('book_list');

  categories.forEach(category => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('category_item');
    const categoryLink = document.createElement('a');
    categoryLink.textContent = category.list_name;

    categoryLink.addEventListener('click', async () => {
      const categoryName = category.list_name;
      await fetchBooksForCategory(categoryName); //сюди потрібно підставити функцію яка буде рендерити книги по категоріях

      categories.forEach(cat => {
        cat.categoryLink.classList.remove('active-category');
      });

      categoryLink.classList.add('active-category');
    });

    categoryLink.classList.add('category_link');

    categoryLink.addEventListener('focus', () => {
      categoryLink.classList.add('uppercase');
    });

    categoryLink.addEventListener('blur', () => {
      categoryLink.classList.remove('uppercase');
    });

    categoryLink.addEventListener('mouseover', () => {
      categoryLink.classList.add('uppercase');
    });

    categoryLink.addEventListener('mouseout', () => {
      categoryLink.classList.remove('uppercase');
    });

    category.categoryLink = categoryLink;

    categoryItem.appendChild(categoryLink);
    categoryList.appendChild(categoryItem);
  });

  categoriesContainer.appendChild(categoryList);
}

fetchCategories();
