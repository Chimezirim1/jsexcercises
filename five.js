// Write a program that creates an array of your favorite movies and then iterates through the array to print each movie title.
const favoriteMovies = ["Playful", "After", "Legends"];

for (let i = 0; i < favoriteMovies.length; i++) {
  console.log(favoriteMovies[i]);
}


// Implement a function that takes an array of numbers and returns the sum of all the elements.
function sumArray(numbers) {
    let total = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
  
    return total;
  }


  
// Explore array methods like slice, splice, and sort to manipulate and organize array elements in different ways.
const fruits = ["carrots", "banana", "dates", "apples" ];

// Sort the array in ascending order (smallest to largest)
fruits.sort(); 


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Remove the first three elements of the array
numbers.splice(0, 3); // [3, 4, 5, 6, 7, 8, 9, 10]


// Create a new array with the last three elements of the original array
const newNumbers2 = numbers.slice(-3); // [8, 9, 10]
