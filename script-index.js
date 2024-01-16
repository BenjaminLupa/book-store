//Deklaration der Selektoren
const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const BookList = document.querySelector("#book-list");

//Leeres Array um in ihn die ganzen Buchdaten zu laden
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
      renderBooks(allBooks);
    });
}

// Render All Books + Click event on title to /book.html to show individual book-info
function renderBooks(books) {
  const bookListContainer = document.getElementById("book-list");

  books.forEach((book) => {
    const bookElement = document.createElement("article");
    bookElement.className = "container-gesamtansicht";
    const titleId = `book-title-${book.id}`;

    bookElement.innerHTML = `
              <h2 class="title-gesamtansicht" id="${titleId}">${book.title}</h2>
              <p class="beschreibung-gesamtansicht">Von: ${book.author}, ISBN:&nbsp;${book.isbn}</p>
              <button class="button-favorisieren" id=${book.id}>Favorisieren</button>
          `;

    bookListContainer.appendChild(bookElement);

    const titleElement = document.getElementById(titleId);
    titleElement.addEventListener("click", () => {
      window.location.href = `./book.html?id=${book.id}`;
    });

    bookElement.lastElementChild.addEventListener("click", (el) => {
      el.preventDefault();
      const favoriteBooks = [];
      favoriteBooks.push(book);
      console.log(favoriteBooks);
    });
  });
}

//
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

function localeStorageSave() {
  localStorage.setItem("books", JSON.stringify(book));
}
