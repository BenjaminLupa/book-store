const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const bookDetails = document.querySelector("#book-details");

document.addEventListener("DOMContentLoaded", () => {
  const bookId = new URLSearchParams(window.location.search).get("id");
  const id = parseInt(bookId, 10);
  console.log(id);
  loadBookData(id);
});

function loadBookData(id) {
  fetch(`http://localhost:4730/books/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      renderBook(data);
    });
}

function renderBook(data) {
  bookDetails.innerHTML = `
  <img src = "${data.cover}"/>
  <h2>${data.title}</h2>
  <p>Autor: ${data.author}</p>
  <p>ISBN: ${data.id}</p>
  <p> ${data.abstract}</p>
  `;
}
