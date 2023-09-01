// Функція яка відправляє запит по категоріям для відображення результатів
let CATEGORY_NAME = "Hardcover Fiction";
async function fetchAndDisplayBooks() {
  const apiUrl = `https://books-backend.p.goit.global/books/category?category=${CATEGORY_NAME}`;
  
  try {
    const response = await axios.get(apiUrl);
    const books = response.data;

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Очищає попередній вміст  <дів id="result-container" class="list-selected-books"></д> //

   // Додати заголовок h2 з назвою категорії
    const titleCategoryName = document.createElement("h2");
    titleCategoryName.classList.add("title-category-name");
    titleCategoryName.textContent = CATEGORY_NAME;
    resultContainer.appendChild(titleCategoryName);
    



    
    if (books.length === 0) {
      // При відсутність книг, відображає повідомлення Р з класом notFound
      const noBooksMessage = document.createElement("p");
      noBooksMessage.classList.add("notFound");
      noBooksMessage.textContent = "No books found in the selected category. Please choose another category.";
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

 