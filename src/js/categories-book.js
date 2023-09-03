// Функція яка відправляє запит по категоріям для відображення результатів
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

     // Замініть це на назву вибраної категорії
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Очищення попереднього вмісту
    //розбиваємо на слова
             
    const words = categoryName.split(" ");
    if (words.length > 1) {
      // Більше одного слова, прибираємо останнє слово
      const lastWord = words.pop();
      // Додаємо останнє слово зі стилем кольору
      words.push(`<span style="color: #4F2EE8;">${lastWord}</span>`);
    }
    // Складаємо назад в один рядок
    const formattedCategoryName = words.join(" "); 
    //Повертаємо заголовок з відформатовоною назвою категорії назад)
    const categoryTitle = document.createElement("h2");
    categoryTitle.innerHTML = formattedCategoryName;
    resultContainer.appendChild(categoryTitle);

    // При відсутність книг, відображає повідомлення Р з класом notFound
    if (books.length === 0) {
      const noBooksMessage = document.createElement("p");

      noBooksMessage.classList.add("categoryesNotFound");
      noBooksMessage.textContent = "Вибраної категорії не існує. Виберіть іншу категорію.";

      resultContainer.appendChild(noBooksMessage);
    } else {
      // Відображаємо книги їх у вигляді списку (картинка назва автор)
      const ul = document.createElement("ul");
      ul.className = "categoryes-book-list"; // Клас стилізації UL

      books.forEach(book => {
        const li = document.createElement("li");
        li.className = "book-item"; // Клас стилізації LI

        const img = document.createElement("img");

        img.classList.add("categoryes-book-img");
        img.height = 316;
        img.width = 218;
        img.src = book.book_image || '../images/plug picture/plug335x485@1x.jpg';
        img.alt = book.title || 'N/A';

        const title = document.createElement("p");
        title.classList.add("categoryes-title-book");
        title.textContent = book.title  || 'N/A';

        const author = document.createElement("p");
        author.classList.add("categoryes-author-book");
        author.textContent = book.author  || 'N/A';

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(author);

        ul.appendChild(li);
      });

      resultContainer.appendChild(ul);
      }
      
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

// Виклик фyнкці для запиту на серевер для отримання списку книг
fetchAndDisplayBooks();

 export default fetchAndDisplayBooks;