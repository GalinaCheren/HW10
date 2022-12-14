// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
console.log(
  " Завдання 1 \nВивести числа від 20 до 30 (включно) через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)"
);
{
  let numbers = "";
  for (let i = 20; i <= 30; i += 0.5) {
    numbers += `${i} `;
  }
  console.log(numbers);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
console.log(
  "Завдання 2 \nОдин долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів"
);

{
  for (let i = 10; i <= 100; i += 10)
    console.log(`${i} $ * 27 UAH = ${27 * i} UAH`);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
console.log(
  " Завдання 3 \nДане ціле число. Вивести всі цілі числа від 1 до 100 (включно), квадрат яких не перевищує числа N"
);
{
  let number = +prompt("Завдання 3\n Write you N (number) here:");
  if (number) {
    for (let i = 1; i <= 100; i++) {
      if (i ** 2 <= number) {
        alert(i);
      } else {
        break;
      }
    }
  } else {
    alert("Use valide number!");
  }
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log(
  " Завдання 4 \nДане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)."
);
const string = prompt("Завдання 4\n Write you N (number) here:");
if (string !== null && string !== "" && isFinite(string)) {
  const number = Number(string);

  if (number <= 1 || number % 1) {
    alert("Your number is not a prime!");
  } else {
    for (let i = 2; i <= number; i++) {
      if (i === number) {
        alert("You writed a prime number!");
      } else if (number % i === 0) {
        alert("Your number is not a prime!");
        break;
      }
    }
  }
} else {
  alert("Use valide number!");
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
console.log(
  "Завдання 5 \nДане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)"
);
{
  let number = +prompt("Завдання 5\n Write you N (number) here:");
  if (number > 3) {
    for (let i = 3; i < number; i *= 3) {
      if (i * 3 > number) {
        alert(`You can't do this with ${number}!`);
      } else if (i * 3 === number) {
        alert(`Yes you can do it with ${number}`);
      }
    }
  } else {
    alert("Use valide number from 4");
  }
}
