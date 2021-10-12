'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let a = 0;
    let b = 0;
    for (let i = 0; i < numberOfFilms; i++) {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');
        if (a === "" || b === "") {
            i--;
        } else if (a === null || b === null) {
            i--;
        } else if (a.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[a] = b;
            a++;
            b++;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 29) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// как это вижу я
// function showMyDB () {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }

function showMyDB (hidden) { // если свойство приватное то False, если нет - True
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

//console.log(personalMovieDB);

function writeYourGeners () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);           // `` используются для возможности вывода i в вопрос
        personalMovieDB.genres[i - 1] = genre;                               //i-1 т.к. итерации начали не с 0
    }
}

writeYourGeners();
