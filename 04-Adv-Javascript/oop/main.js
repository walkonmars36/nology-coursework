class Book {
  constructor(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
  }

  getSummary() {
    return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}`;
  }
}

const book1 = new Book("Harry Potter and the Half-Blood Prince", "J.K. Rowling", "Fiction", 2009);

// console.log(book1);

class Magazine extends Book {
  constructor(title, author, genre, year, length) {
    super(title, author, genre, year);
    this.length = length;
  }
}

const mag1 = new Magazine("mag1", "Mark Lawson", "Music Technology", 2021, 200);

// console.log(mag1);

console.log(mag1.getSummary());
