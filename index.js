import Book from './modules/book.js';
import BookCollection from './modules/bookCollection.js';
import { addBookToLS, removeBookLS } from './modules/localStorage.js';
import handleLinkClick from './modules/navbarLinks.js';
import clearFormFields from './modules/clearForm.js';
import insertDate from './modules/date.js';

// Display books on page load
window.addEventListener('DOMContentLoaded', BookCollection.bookDisplay);

// Add Book Event
const formEl = document.querySelector('#book-form');
formEl.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-name').value;
  const author = document.querySelector('#book-author').value;

  if (title !== '' && author !== '') {
    if (e.target.classList.contains('addButton')) {
      const newBook = new Book(title, author);
      newBook.id = BookCollection.list.length + 1;
      BookCollection.addBookUI(newBook);
      addBookToLS(newBook); // Add book to booklist in localStorage
      clearFormFields();
      formEl.submit();
    }
  }
});

// Remove Book from UI, localStorage and arrayList
const bookContainer = document.querySelector('.booksContainer');
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const bookId = e.target.parentElement.id; // Card holder ID traversed here
    BookCollection.removeBook(bookId);
    removeBookLS(bookId);
    e.target.parentElement.remove();
  }
});

// Nav-links event
document.getElementById('nav-links').addEventListener('click', handleLinkClick);
document.getElementById('defaultOpen').click(); // Click on the list nav-link at default on page load

// Insert Date from Luxon.js
insertDate();