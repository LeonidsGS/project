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


// такую функцию можно вызывать даже до того как они были объявлены (можно все функции закидывать в конец кода)
// function showFirtMessage(text) {
//     console.log(text);
// }

// showFirtMessage('kek');


// function calc(a, b) {
//     return (a + b); //после return код не выполняется
// }
// console.log(calc(4, 3));

//такую функцию не вызвать до объявления (т.к. является переменной)
// const logger = function() {
//     console.log('Hello');
// }; //нужна точка с запятой, т.к. это переменная по сути
// logger();

//стрелочная функция
// const calc = (a, b) => {
//     return a + b;
// };


// const str = 'test';
// console.log(str.toUpperCase());// верхний регист (метод не меняет изначальную переменную)
// console.log(str.toLocaleLowerCase()); // нижний регистр

// const fruit = 'Some fruit';
//  console.log(fruit.indexOf('fruit')); //позволяет определить с какого знака идет искомое значение (если такого значения нет то возвращает -1)

//  //методы взаимодействия со строками
//  const logg = 'Hello world';
//  console.log(logg.slice(6, 11)); //вырезает символы между номерами начального и конечного (нужно брать +1 для конечной границы)
//  // если брать границы с -, то будет отрезать с конца строки
//  console.log(logg.substring(6, 11)); //то же самое, но без возможности ввода отрицательных траниц
//  console.log(logg.substr(6, 5)); //вторая граница указывает сколько символов нужно вырезать

//  //методы взаимодействия с цифрами
//  const num = 12.2;
//  console.log(Math.round(num)); //округление до ближайшего целого числа

// const test = '12.2px';
// console.log(parseInt(test));// перевод строки в число (обрезается целое число и становится числовым типом)
// console.log(parseFloat(test));//перевод строки в число (с плавающей точкой)

// isNaN(num); // метод проверки на ввод "не числа" (если внутри "не число" то True)

// // callback функция - функция которая должна быть выполнена после того, как другая закончила выполняться
// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {              //можно также передавать уже ранее созданную функцию (без круглых скобок после названия функции)
//     console.log('Я прошел этот урок');
// });

// //объекты
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {      //по сути это метод, созданный собственноручно и к которому можно потом обращаться
//         console.log('test');
//     }
// };

// console.log(options['colors']['border']); //как достучаться до свойства объекта в объекте, но лучше использовать деструктуризацию объекта
// //деструктуризация объекта:
// const {border, bg} = options.colors;
// console.log(border);


// //delete options.name; //удаление свойства из объекта

// options.makeTest(); //обращение к методы makeTest (который мы сами создали)

// let counter = 0;   //переменная для создания счетчика свойств
// for (let key in options) { //перебор свойств объекта (работает столько раз сколько свойств объекте)
//     if (typeof (options[key]) === 'object') {           //если свойтсво является объекта, то делаем еще один переюор но уже в нем
//         for (let key2 in options[key]) {
//             console.log(`Свойство ${key2} имеет значение ${options[key][key2]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options)); //метод для получения массива со всеми ключами объекта
// console.log(Object.keys(options).length); //можно узнать количество свойств в объекте

// //массивы
// const arr = [1, 2, 3, 6, 8];

// arr.pop(); // метод который удаляет последний элемент массива
// arr.push(10); //метод добавляющий элемент в конец массива

// for (let i = 0; i < arr.length; i++) {     //цикл для перебора элементов массива
//     console.log(arr[i]);
// }

// for (let value of arr) {                   //метод for of (работает только с массиво подобными сущностями) для перебора элементов массива
//     console.log(value);                    //плюс в сравнении с forEach в том, что можно использовать break и continue
// } //http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript - отличие for in от for of

// arr.forEach(function(item, i, arr) {                    // метод для гибкого перебора элементов массива
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt('', '');
const products = str.split(', '); //метод для преобразования данных из строки в массив (внутри в кавычках указать какой должен быть разделитель)
products.sort();                  //метод для сортировки (сортирует элементы строки по алфавиту)
console.log(products.join('; ')); //метод для преобразования элементов массива в строку (внутри в кавычках также указать разделитель) 

const arr = [12, 4, 14, 1, 6];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {      //шаблон для сортировки элементов массива
    return a - b;
}

//передача по ссылке или по значению
const obj = {
    a: 5,
    b: 1
};

// const copy = obj;    //copy - это ссылка на объект obj (не передает значение) (поэтому когда в следующей строке у свойства "а" в copy меняется значение, то оно меняется и в obj)
// // у примитивов работает по другому (например a = 1; b = a; b = 3 (а - останется прежним))
// copy.a = 10;
// console.log(copy);
// console.log(obj);

//Первая функция для создания поверхностной копии объекта:
//поверхностная копия - ключи первого уровня копируются, а на последующие даются ссылки на изначальный объект
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
//проверка:
const numbers = {
    a: 5,
    b: 2,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers); //копия
console.log(numbers);    //изначальный объект (не изменился)
newNumbers.a.x = 10;      //измениться и в копии и в изначальном объекте (т.к. была создана поверхностная копия (смотри определение выше))

//метод для соединения объектов:
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //объедененные объекты
const clone = Object.assign({}, add); //по сути еще один способ создания копии объекта
clone.d = 10;
console.log(add);
console.log(clone);

//метод для создания копии массива:
const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); 

newArr[1] = 'asdasd';
console.log(oldArr);
console.log(newArr);

//метод создания копии разворотом на отдельные элементы:
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7]; //разворачивает массив на отдельные элементы
log(...num);

const array = ['a', 'b'];
const NewArray = [...array]; //создание копии массива с использованием оператора ...

const q = {
    one: 1,
    two: 2
};

const newQ = [...q]; // создание копии объекта


// основы ООП:
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const john = {
  health: 100  
};

john.__proto__ = soldier; //(устаревший формат) новый объект на основе прототипа soldier 
console.log(john.armor);
john.sayHello();

//новый формат прототипирования:
Object.setPrototypeOf(john, soldier); // назначить прототип объекту (объект которому назначается прототип (john), объект, прототип которого устанавливается (soldier))

сonst john = Object.create(soldier); //сразу создать объект на основе прототипа