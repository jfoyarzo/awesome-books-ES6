/* eslint-disable max-classes-per-file */
import Book from './modules/Book.js';
import Methods from './modules/Methods.js';

window.onload = () => {
  const add = document.querySelector('.add');
  const dateEl = document.querySelector('.date');

  const displayDate = () => {
    setInterval(() => {
      const date = new Date().toUTCString();
      dateEl.innerHTML = date;
    }, 1000);
  };
  displayDate();

  const method = new Methods();
  const bookStorage = localStorage.getItem('bookArray');
  const success = document.querySelector('.successMsg');

  if (bookStorage) {
    method.bookList = JSON.parse(bookStorage);
    method.showBooks();
  }

  add.addEventListener('click', (e) => {
    e.preventDefault();

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
  });
};

const listEl = document.querySelector('.list');
const addNewEl = document.querySelector('.add-new');
const contactEl = document.querySelector('.contact');
const bookSection = document.querySelector('#books');
const formSection = document.querySelector('#form');
const contactSection = document.querySelector('#contact');

listEl.addEventListener('click', () => {
  bookSection.classList.remove('hidden');
  listEl.classList.add('active');
  addNewEl.classList.remove('active');
  contactEl.classList.remove('active');
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

addNewEl.addEventListener('click', () => {
  bookSection.classList.add('hidden');
  formSection.classList.remove('hidden');
  addNewEl.classList.add('active');
  listEl.classList.remove('active');
  contactEl.classList.remove('active');
  contactSection.classList.add('hidden');
});

contactEl.addEventListener('click', () => {
  bookSection.classList.add('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
  contactEl.classList.add('active');
  addNewEl.classList.remove('active');
  listEl.classList.remove('active');
});