"use strict";
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

