// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Define the showMagicians function
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  // magician names
  const magicianNames: string[] = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
  

  const greatMagicians: string[] = makeGreat([...magicianNames]); 
  
  
  console.log("Original Magicians:");
  showMagicians(magicianNames);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);