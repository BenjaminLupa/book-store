//Deklaration der Selektoren
const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const BookList = document.querySelector("#book-list");

//Leeres Array um in ihn die ganzen Buchdaten zu laden
let favoriteBooks = [];

//
function localeStorageLoad() {
  const erhalteDaten = localStorage.getItem("books");
  favoriteBooks = JSON.parse(erhalteDaten) ? JSON.parse(erhalteDaten) : [];

  renderFavouriteBooks();
}

// Render Favourite Books
function renderFavouriteBooks() {
  const favouriteBookListContainer = document.getElementById("book-list");
  favoriteBooks.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "container-gesamtansicht";
    bookElement.innerHTML = `
              <h2 class="title-gesamtansicht">${book.title}</h2>
              <p class="beschreibung-gesamtansicht">Von: ${book.author}, ISBN:&nbsp;${book.isbn}</p>
              <button class="button-favorisieren" id=${book.id}>Favorisieren</button>
          `;

    favouriteBookListContainer.appendChild(bookElement);
  });
}

localeStorageLoad();
