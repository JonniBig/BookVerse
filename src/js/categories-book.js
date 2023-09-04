import axios from 'axios';

async function fetchAndDisplayBooks(categoryName) {
  const lowerCaseCategory = categoryName.toLowerCase();
  if (typeof e === 'string' && e.toLowerCase() === "all categories") {
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
    categoryTitle.classList.add('title_books');
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

      books.forEach(book => {
        const li = document.createElement('li');
        li.className = 'book-item';
        li.id = `book-${book._id}`;

        const a = document.createElement('a');
        a.href = '/book-details.html?id=' + book._id;
        // a.target = '_blank';

        const div1 = document.createElement('div');
        const img = document.createElement('img');
        img.classList.add('book-wrap');
        img.src =
          book.book_image || '../images/plug picture/plug335x485@1x.jpg';
        img.alt = book.title;
        div1.appendChild(img);

        const div2 = document.createElement('div');
        div2.classList.add('noName');

        const title = document.createElement('p');
        title.classList.add('book-name');
        title.textContent = book.title || 'N/A';

        const author = document.createElement('p');
        author.classList.add('book-author');
        author.textContent = book.author || 'N/A';

        div2.appendChild(title);
        div2.appendChild(author);

        a.appendChild(div1);
        a.appendChild(div2);
        li.appendChild(a);
        ul.appendChild(li);
      });

      resultContainer.appendChild(ul);
    }
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

fetchAndDisplayBooks();

export default fetchAndDisplayBooks;
