/* eslint-disable max-classes-per-file */
import { addBook, displayDate, checkStorage } from './modules/Functions.js';

window.onload = () => {
  const add = document.querySelector('.add');
  checkStorage();
  displayDate();
  add.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
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