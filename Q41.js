"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// magician names
const magicianNames = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron "];
showMagicians(magicianNames);
