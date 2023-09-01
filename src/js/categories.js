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

function renderCategories(categories) {
  categoriesContainer.innerHTML = '';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('book_list');

  categories.forEach(category => {
    const categoryItem = document.createElement('li');
    const categoryLink = document.createElement('a');

    categoryItem.classList.add('category_item');
    categoryLink.classList.add('category_link');
    categoryLink.textContent = category.list_name;
    categoryLink.href = '#'; // посилання на обробник події

    categoryItem.appendChild(categoryLink);
    categoryList.appendChild(categoryItem);
  });

  categoriesContainer.appendChild(categoryList);
}

fetchCategories();
