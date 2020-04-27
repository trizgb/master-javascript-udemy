'use strict';

// JSON - Javascript Object Notation

let film = {
    title : 'Batman vs Superman',
    year: 2017,
    country: 'USA'
};

let films = [
    {
        title: 'La verdad duele',
        year: 2016,
        country: 'France'
    },
    film
]

// film.title = 'Batman Begins';

// console.log(film);
console.log(films);

let filmsBox = document.querySelector('#films');
let index;

for (index in films) {
    let p = document.createElement('p');

    p.append(films[index].title);
    filmsBox.append(p);
}
