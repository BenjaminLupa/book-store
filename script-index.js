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
  });
}

loadBookData();
