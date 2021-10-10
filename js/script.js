"use strict";//работа в современном стандарте
// console.log(1);//передача значения в консоль
// let number = 5; //изменяемая переменная
// const leftBorderWidth = 1; //константа
// number = 10;
// console.log(number);


// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Your age?", "25");
// console.log(typeof(answer));//typeof возвращает тип данных в переменной
//!!! вся информация, которая приходит от пользователя имеет тип - строка.

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);//показывет что-то поверх всей страницы

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`); //нужны косые ковычки (позволяет формировать путь)

// const user = 'Ivan';
// alert(`Привет, ${user}`);

// let incr = 10,
// decr = 10;

// incr++;// постфиксный вид
// decr--;

// ++incr;// префиксный вид
// --decr;

// console.log(5%2);// % - остаток от деления

// = //присваивание
// == //сравнение (не по типу, а по содержанию)
// ===//строгое сравнение (и по типу)
// && //и
// ||//или
// !//отрицание (превращает true в false)
// !=// не равно




// let num = 10;
// if (num < 9) {
//     console.log('Fuck');
// } else if (num > 100) {
//     console.log('Error');
// } else {
//     console.log('Kek');
// }
// let num = 1;
// switch (num) { //только строгое сравнение (без знаков ><)
//     case 12:
//         console.log('Неверно');
//         break;
//     case 5:
//         console.log('Неверно');
//         break;
//     case 10:
//         console.log('Ez');
//         break;
//     default:
//         console.log('Fuck');
//         break;    
// }

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num++;  
// }
// while (num <=55);

// let num = 10;
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// let num = 10;
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue; // пропуск итерации
//     }
//     console.log(i);
// }