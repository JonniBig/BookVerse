import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/';

const categoriesContainer = document.querySelector('.categories');

function fetchCategories() {
  axios
    .get(`${BASE_URL}books/category-list`)
    .then(response => {
      const categories = response.data;
      const categoriesAll = { list_name: 'All categories' };
      categories.unshift(categoriesAll);
      renderCategories(categories);
    })
    .catch(error => {
      console.error('Помилка при отриманні категорій:', error);
    });
}

fetchCategories();