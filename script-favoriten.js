const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const BookList = document.querySelector("#book-list");

let favoriteBooks = [];

function localeStorageLoad() {
  const erhalteDaten = localStorage.getItem("books");
  favoriteBooks = JSON.parse(erhalteDaten) ? JSON.parse(erhalteDaten) : [];
}
