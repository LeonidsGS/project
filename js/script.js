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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 const firstQ = prompt('Один из последних просмотренных фильмов?');
 const secondQ = prompt('На сколько оцените его');
 const thirdQ = prompt('Один из последних просмотренных фильмов?');
 const fourthQ = prompt('На сколько оцените его');
personalMovieDB.movies[firstQ] = secondQ;
personalMovieDB.movies[thirdQ] = fourthQ;
console.log(personalMovieDB);  