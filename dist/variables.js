"use strict";
// String Variable With Explicit Annotation
let movieTitle = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();
// Number Variable with explicit annotation
let numCatLives = 9;
numCatLives += 1;
// numCatLives = "zero"; //Error!
// Explicitly typed boolean variable:
let gameOver = false;
gameOver = true;
// gameOver = "true"; //error!!
// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false;
let isFunny = false;
isFunny = true;
// isFunny = "asd";
// the any type
let thing = "hello"; //This is not a great idea!
thing = 1;
thing = false;
thing();
thing.toUpperCase();
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;
for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
