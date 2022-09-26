import { DateTime } from './luxon.js';
import Methods from './Methods.js';
import Book from './Book.js';

const method = new Methods();
const addBook = () => {
  const success = document.querySelector('.successMsg');
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = new Book(title, author);
  method.bookList.push(book);
  method.showBooks();
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
  localStorage.setItem('bookArray', JSON.stringify(method.bookList));
  success.classList.remove('transparent');
  setTimeout(() => success.classList.add('transparent'), 3000);
};

const displayDate = () => {
  const dateEl = document.querySelector('.date');
  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    dateEl.innerHTML = date;
  }, 1000);
};

const checkStorage = () => {
  const bookStorage = localStorage.getItem('bookArray');

  if (bookStorage) {
    method.bookList = JSON.parse(bookStorage);
    method.showBooks();
  }
};

export { addBook, displayDate, checkStorage };