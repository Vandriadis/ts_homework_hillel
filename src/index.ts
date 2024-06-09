/**
 * 1 Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
  Наприклад, тип значення для кожного ключа може бути число | рядок.
2 Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
3 Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. 
Ключі повинні бути числами, а значення - певного типу.
4 Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
5 Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
6 Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами). */

// Завдання 1
interface IIndexable {
  [key: string]: number | string;
}

// Завдання 2
interface IFunctionIndex {
  [key: string]: (...args: unknown[]) => unknown;
}

// Завдання 3
interface IArrayLike<T> {
  [index: number]: T;
}

// Завдання 4
interface IPerson {
  name: string;
  [key: string]: unknown;
}

// Завдання 5
interface IGenericIndexable {
  [key: string]: unknown;
}

interface IExtendedIndexable extends IGenericIndexable {
  name: string;
  age: number;
}

// Завдання 6
function areAllValuesNumbers(obj: { [key: string]: unknown }): boolean {
  for (const key in obj) {
    if (typeof obj[key] !== 'number') {
      return false;
    }
  }
  return true;
}
