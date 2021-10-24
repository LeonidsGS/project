'use strict';

const personalMovieDB = {
    count: 0,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    rememberMyFilms: function() {
        let a = 0;
        let b = 0;
        for (let i = 0; i < personalMovieDB.count; i++) {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 29) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) { // если свойство приватное то False, если нет - True
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGeners: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            //if (genre === '' || genre == null) {
              //  i--;
            //} else {
                personalMovieDB.genres[i - 1] = genre;
            //}
            personalMovieDB.genres.forEach((item, i) => {       //item - содержимое массива под номером i
                console.log(`Любимй жанр ${i + 1} - это ${item}`);
                });
            }
        },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.writeYourGeners();



