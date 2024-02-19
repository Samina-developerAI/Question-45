"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Define the original guest list
const originalGuestList = [
    "Ania",
    "Maya",
    "Eurm",
];
// Function to generate dinner invitations
function generateInvitations(guests) {
    return guests.map((guest) => `Dear ${guest}, you are invited to dinner!`);
}
// Invite guests
const originalInvitations = generateInvitations(originalGuestList);
// Print original invitations
originalInvitations.forEach((invitation) => console.log(invitation));
// Inform about the number of people invited to dinner
console.log(`We are inviting ${originalGuestList.length} people to dinner.`);
