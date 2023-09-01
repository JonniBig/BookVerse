// Функція яка відправляє запит по категоріям для відображення результатів
let CATEGORY_NAME = "Young Adult Paperback Monthly";
async function fetchAndDisplayBooks() {
  const apiUrl = `https://books-backend.p.goit.global/books/category?category=${CATEGORY_NAME}`;
  
  try {
    const response = await axios.get(apiUrl);
    const books = response.data;

     // Замініть це на назву вибраної категорії
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Очищення попереднього вмісту
    // Рядок CATEGORY_NAME розбиваємо на слова
    const words = CATEGORY_NAME.split(" ");
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
      noBooksMessage.classList.add("notFound");
      noBooksMessage.textContent = "У вибраній категорії не знайдено книг. Виберіть іншу категорію.";
      resultContainer.appendChild(noBooksMessage);
    } else {
      // Відображаємо книги їх у вигляді списку (картинка назва автор)
      const ul = document.createElement("ul");
      ul.className = "book-list"; // Клас стилізації UL

      books.forEach(book => {
        const li = document.createElement("li");
        li.className = "book-item"; // Клас стилізації LI

        const img = document.createElement("img");
        img.classList.add("img-book");
        img.src = book.book_image;
        img.alt = book.title;

        const title = document.createElement("p");
        title.classList.add("title-book");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.classList.add("author-book");
        author.textContent = book.author;


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

// Виклик фенкції для запиту на серевер для отримання списку книг
fetchAndDisplayBooks();

 