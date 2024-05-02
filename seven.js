// Write a program that prompts the user for a sentence. Use string methods to convert the sentence to lowercase, remove leading and trailing whitespace, and then count the number of words in the sentence.
// Program to prompt user for a sentence, convert to lowercase, remove leading/trailing whitespace, and count words
const sentence = prompt("Enter a sentence:");
const trimmedSentence = sentence.trim().toLowerCase();
const words = trimmedSentence.split(" ").filter(word => word !== "");

console.log(Number of words in the sentence: ${words.length});


// Implement a function that takes a string as input and checks if it is a palindrome. Use string methods to manipulate the string for comparison.
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  const inputString = prompt("Enter a string to check if it is a palindrome:");
  if (isPalindrome(inputString.toLowerCase())) {
    console.log(${inputString} is a palindrome.);
  } else {
    console.log(${inputString} is not a palindrome.);
  }