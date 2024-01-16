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
    });
}
loadBookData();
