let CATEGORY_NAME = "Middle Grade Paperback Monthly";
async function fetchAndDisplayBooks() {
  const apiUrl = `https://books-backend.p.goit.global/books/category?category=${CATEGORY_NAME}`;
    try {
    const response = await axios.get(apiUrl);
    const books = response.data;

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Очищення попереднього вмісту
    
    const words = CATEGORY_NAME.split(" ");
    if (words.length > 1) {
      
            const lastWord = words.pop();

      words.push(`<span style="color: #4F2EE8;">${lastWord}</span>`);
    }

      const formattedCategoryName = words.join(" "); 
    //Повертаємо заголовок з відформатовоною назвою категорії назад)
    const categoryTitle = document.createElement("h2");
    categoryTitle.innerHTML = formattedCategoryName;
    resultContainer.appendChild(categoryTitle);


      if (books.length === 0) {
      const noBooksMessage = document.createElement("p");
      noBooksMessage.classList.add("notFound");
      noBooksMessage.textContent = "No books found in the selected category. Please choose another category.";
      resultContainer.appendChild(noBooksMessage);
    } else {

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


fetchAndDisplayBooks();

 