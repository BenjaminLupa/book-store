//Deklaration der Selektoren
const btnAllBooks = document.querySelector("#btn-all-books");
const btnFavorites = document.querySelector("#btn-favorites");
const bookDetails = document.querySelector("#book-details");

//
document.addEventListener("DOMContentLoaded", () => {
  const bookId = new URLSearchParams(window.location.search).get("id");
  const id = parseInt(bookId, 10);
  loadBookData(id);
});

//
function loadBookData(id) {
  fetch(`http://localhost:4730/books/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      renderBook(data);
    });
}

//
function renderBook(data) {
  bookDetails.innerHTML = `
  <img class = "book-cover" src = "${data.cover}"/>
  <div>
  <h2 class = "book-title">${data.title}</h2>
  <p class = "book-author">Autor: ${data.author}</p>
  <p class = "isbn">ISBN: ${data.id}</p>
  <p class = "book-content"> ${data.abstract}</p>
  </div>
  `;
}

//
btnAllBooks.addEventListener("click", (el) =>
  el.preventDefault()((window.location.href = `./index.html`))
);
