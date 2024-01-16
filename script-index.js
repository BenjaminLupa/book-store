const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const BookList = document.querySelector("#book-list");

const allBooks = [];

function loadBookData() {
  fetch("http://localhost:4730/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      allBooks.push(...data);
      console.log(allBooks);
      renderBooks(allBooks);
    });
}

function renderBooks(books) {
  const bookListContainer = document.getElementById("bookList");

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
              <h2>${book.title}</h2>
              <p>Von: ${book.author}, ISBN: ${book.isbn}</p>
              <button class="button-favorisieren" id=${book.id}>Favorisieren</button>
          `;

    bookListContainer.appendChild(bookElement);

    bookElement.addEventListener("click", () => {
      window.location.href = `./book.html?id=${book.id}`;
    });
  });
}

loadBookData();

// Menu Button Color Change:
const mainMenu = document.querySelectorAll(".menu");

mainMenu.forEach(function (button) {
  button.addEventListener("click", function () {
    mainMenu.forEach(function (otherButton) {
      otherButton.classList.remove("button-color");
    });
    button.classList.add("button-color");
  });
});
