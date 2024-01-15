const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const bookDetails = document.querySelector("#book-details");

function loadBookData() {
  fetch(`http://localhost:4730/books/${isbn}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    });
}
