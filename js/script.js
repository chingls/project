"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
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

// const a = prompt('Один из последних просмотренных фильмов',''),
//       b = prompt('насколько вы его оцениаете', ''),
//       c = prompt('Один из последних просмотренных фильмов',''),
//       d = prompt('насколько вы его оцениаете', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
for (let i = 0; i <2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов',''),
            b = prompt('насколько вы его оцениаете', '');
   if(a != null && b != null && a != '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
   } else {
       console.log('error');
       i--;
   }
   
}

function rememberMyFilms() {
    for (let i = 0; i <2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов',''),
                b = prompt('насколько вы его оцениаете', '');
       if(a != null && b != null && a != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
       } else {
           console.log('error');
           i--;
       }
        
}
}

rememberMyFilms();

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function witeYourGenres() {
    for (let i = 1; i<=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }


}
witeYourGenres();