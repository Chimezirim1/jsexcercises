// Create variables to store your name, age, and favorite color. Use let and const appropriately.
const name = "Ogueji"
let age = 19
const favColor = "red"


// Declare variables with different primitive data types and perform basic operations like addition, comparison, and type checking.
let a = parseInt(prompt("Enter the first number:"))
let b = parseInt(prompt("Enter the second number:"))
function addition(a, b){
    return a + b
}

function subtraction(a, b){
    return a - b
}

function mul(a, b){
    return a * b
}

function div(a, b){
    return a / b
}


//test the function
let result1 = addition(num1, num2);
console.log("num1 + num2 =", result1)

console.log(addition(5, 3));

let result2 = subtraction(3, 2);
console.log("3 - 2 =", result2)


// Initialize an object to represent a product with properties like name, price, and inStock.
const book = { 
    name: "Jane Eyre",
    price: "$4"
    inStock: "yes"
};


// Create an array of your favorite movies with at least 5 elements.
const movies = ["Playful", "After", "Legends", "Teared", "Little"];