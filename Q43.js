"use strict";
// Define the showMagicians function
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
const greatMagicians = makeGreat([...magicianNames]);
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
