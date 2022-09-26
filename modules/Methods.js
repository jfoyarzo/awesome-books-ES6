export default class Methods {
  constructor() {
    this.bookList = [];
    this.addBook = document.querySelector('.all-books');
    this.parser = new DOMParser();
  }

    removeBook = (e, newBookElement) => {
      const index = e.target.getAttribute('myIndex');
      this.bookList = this.bookList.filter((element, i) => {
        if (i === parseInt(index, 10)) {
          return false;
        }
        return true;
      });
      newBookElement.remove();
      localStorage.setItem('bookArray', JSON.stringify(this.bookList));
      this.showBooks();
    };

    showBooks = () => {
      this.addBook.innerHTML = '';
      this.bookList.forEach((e, i) => {
        const newBook = `
        <div class="book-div">
        <p>"${e.title}" by ${e.author}</p>
        <button type="button" class="remove" myIndex ="${i}" >Remove</button>
        </div>
        `;
        const newBookElement = this.parser.parseFromString(newBook, 'text/html').body.firstChild;
        const remove = newBookElement.querySelector('.remove');
        remove.addEventListener('click', (e) => {
          this.removeBook(e, newBookElement);
        });
        this.addBook.append(newBookElement);
      });
    };
}