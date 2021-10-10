'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = 0;
let b = 0;
for (let i = 0; i < numberOfFilms; i++) {
    a = prompt('Один из последних просмотренных фильмов?','');
    b = prompt('На сколько оцените его?','');
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

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 29) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);

