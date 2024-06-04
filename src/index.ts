/* eslint-disable no-console */
// 1. Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор.
// Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення.
// Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.
interface ICalculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

function calculate(calculator: ICalculator, operation: string, a: number, b: number): number | null {
  switch (operation) {
    case 'add':
      return calculator.add(a, b);
    case 'subtract':
      return calculator.subtract(a, b);
    case 'multiply':
      return calculator.multiply(a, b);
    case 'divide':
      return calculator.divide(a, b);
    default:
      return null;
  }
}

class SimpleCalculator implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

// 2. Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги.
//  Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про книжки та авторів.
//  Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для отримання інформації про книги та авторів.
interface IAuthor {
  id: number;
  name: string;
  bio: string;
}

interface IBook {
  id: number;
  title: string;
  authorId: number;
  summary: string;
}

interface IBookService {
  getBookById(id: number): IBook | null;
  getBooksByAuthor(authorId: number): IBook[];
  getAuthorById(id: number): IAuthor | null;
}

const authors: IAuthor[] = [
  { id: 1, name: 'J.K. Rowling', bio: 'British author, best known for the Harry Potter series.' },
  {
    id: 2,
    name: 'George R.R. Martin',
    bio: 'American novelist and short story writer, best known for A Song of Ice and Fire.',
  },
];

const books: IBook[] = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    authorId: 1,
    summary: 'The first book in the Harry Potter series.',
  },
  { id: 2, title: 'A Game of Thrones', authorId: 2, summary: 'The first book in the A Song of Ice and Fire series.' },
];

const bookService: IBookService = {
  getBookById(id: number): IBook | null {
    return books.find(book => book.id === id) ?? null;
  },
  getBooksByAuthor(authorId: number): IBook[] {
    return books.filter(book => book.authorId === authorId);
  },
  getAuthorById(id: number): IAuthor | null {
    return authors.find(author => author.id === id) ?? null;
  },
};
