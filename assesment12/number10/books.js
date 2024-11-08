// Book class
class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.year}) - Genre: ${this.genre}`;
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  filterBooksByYear(year) {
    return this.books.filter((book) => book.year > year);
  }

  getAllBookTitles() {
    return this.books.map((book) => book.title);
  }

  getTotalNumberOfBooks() {
    return this.books.reduce((count) => count + 1, 0);
  }

  getAveragePublicationYear() {
    const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
    return totalYears / this.books.length;
  }
}


const library = new Library();


library.addBook(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction")
);
library.addBook(
  new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction")
);


console.log(library.filterBooksByYear(1950));
console.log(library.getAllBookTitles());
console.log(library.getTotalNumberOfBooks()); 
console.log(library.getAveragePublicationYear()); 
