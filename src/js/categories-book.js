import axios from 'axios';

async function fetchAndDisplayBooks(categoryName) {
  const lowerCaseCategory = categoryName.toLowerCase();
  if (lowerCaseCategory === 'all categories') {
    window.location.href = 'index.html';
    return;
  }
  const apiUrl = `https://books-backend.p.goit.global/books/category?category=${categoryName}`;
  try {
    const response = await axios.get(apiUrl);
    const books = response.data;
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    const words = categoryName.split(' ');
    if (words.length > 1) {
      const lastWord = words.pop();
      words.push(`<span style="color: #4F2EE8;">${lastWord}</span>`);
    }
    const formattedCategoryName = words.join(' ');
    const categoryTitle = document.createElement('h2');
    categoryTitle.classList.add('title-books');
    categoryTitle.innerHTML = formattedCategoryName;
    resultContainer.appendChild(categoryTitle);
    if (books.length === 0) {
      const noBooksMessage = document.createElement('p');
      noBooksMessage.classList.add('categoryesNotFound');
      noBooksMessage.textContent =
        'Вибраної категорії не існує. Виберіть іншу категорію.';
      resultContainer.appendChild(noBooksMessage);
    } else {
      const ul = document.createElement('ul');
      ul.className = 'bestseller';
      resultContainer.appendChild(ul); // Додаємо ul до контейнера перед додаванням книг

      books.forEach((book, index) => {
        setTimeout(() => {
          const li = document.createElement('li');
          li.className = 'book-item';
          li.id = book._id;
          const a = document.createElement('a');
          a.setAttribute('aria-label', book.title);
          a.classList.add('best-img-link');
          a.href = '/book-details.html?id=' + book._id;

          const img = document.createElement('img');
          img.classList.add('book-wrap');
          img.src =
            book.book_image || '../images/plug picture/plug335x485@1x.jpg';
          img.alt = book.title;
          a.appendChild(img);
          const div2 = document.createElement('div');
          div2.classList.add('book-info-block');
          const pView = document.createElement('p');
          pView.classList.add('view');
          pView.textContent = 'quick view';
          const pTitle = document.createElement('p');
          pTitle.classList.add('book-name');
          pTitle.textContent = book.title || 'N/A';
          const pAuthor = document.createElement('p');
          pAuthor.classList.add('book-author');
          pAuthor.textContent = book.author || 'N/A';
          div2.appendChild(pView);
          div2.appendChild(pTitle);
          div2.appendChild(pAuthor);
          a.appendChild(div2);
          li.appendChild(a);
          ul.appendChild(li);
        }, index * 100); // Затримка у мілісекундах, тут 500 мс (пів секунди)
      });
    }
    const activeCategoryLi = document.querySelector(
      `li[data-category="${categoryName}"]`
    );
    if (activeCategoryLi) {
      activeCategoryLi.classList.add('active-category');
    }
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

export default fetchAndDisplayBooks;
