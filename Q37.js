"use strict";
function makeShirt(size = "Large", message = "I love Python") {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
    console.log("Summary: The shirt is size " + size + " and has the message: '" + message + "'.");
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Coding is magic!");
