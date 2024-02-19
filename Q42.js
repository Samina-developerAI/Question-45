"use strict";
// showMagicians function
function showMagicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// magician names
const magicianNames = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
