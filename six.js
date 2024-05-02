// Create an object to represent a product with properties like name, price, and inStock. Write functions to add and remove items from a shopping cart that uses this object structure.
// Product object
class Product {
  constructor(name, price, inStock) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
}

// Shopping cart object
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add item to cart
  addItem(product) {
    this.items.push(product);
  }

  // Remove item from cart
  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

// Create a product
const product1 = new Product("Apple", 1.00, true);

// Create a shopping cart
const shoppingCart = new ShoppingCart();

// Add the product to the shopping cart
shoppingCart.addItem(product1);

// Remove the product from the shopping cart
shoppingCart.removeItem(product1);


// Implement a program to store student information (name, ID, grades) as objects in an array. Allow users to search for a student by name and display their information.
// Student object
class Student {
    constructor(name, id, grades) {
      this.name = name;
      this.id = id;
      this.grades = grades;
    }
  }
  
  // Create an array of students
  const students = [
    new Student("Alice", 12345, [90, 80, 95]),
    new Student("Bob", 23456, [85, 90, 80]),
    new Student("Carol", 34567, [95, 85, 90]),
  ];
  
  // Search for a student by name
  const searchName = "Alice";
  const foundStudent = students.find((student) => student.name === searchName);
  
  // Display the student's information
  if (foundStudent) {
    console.log(Name: ${foundStudent.name});
    console.log(ID: ${foundStudent.id});
    console.log("Grades:");
    foundStudent.grades.forEach((grade) => console.log(grade));
  } else {
    console.log("Student not found.");
  }


// Explore object methods for iterating through properties (e.g., for...in loop) and nested objects for more complex data structures.
// Object with nested objects
const data = {
    name: "John Doe",
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    phoneNumbers: ["555-123-4567", "555-234-5678"],
  };
  
  // Iterate through the properties of the object
  for (const property in data) {
    console.log(${property}: ${data[property]});
  }
  
  // Iterate through the properties of the nested object
  for (const property in data.address) {
    console.log(${property}: ${data.address[property]});
  }
  
  // Iterate through the array of phone numbers
  for (const phoneNumber of data.phoneNumbers) {
    console.log(phoneNumber);
  }


// Create an object representing a library book with properties like title, author, and isCheckedOut. Implement a function that displays all the book's information using a loop to iterate through the object's properties.
// Book object
class Book {
    constructor(title, author, isCheckedOut) {
      this.title = title;
      this.author = author;
      this.isCheckedOut = isCheckedOut;
    }
  
    // Display book information
    displayInfo() {
      console.log(Title: ${this.title});
      console.log(Author: ${this.author});
      console.log(Checked Out: ${this.isCheckedOut});
    }
  }
  
  // Create a book
  const book1 = new Book("The Catcher", "J.D.S", false);
  
  // Display the book's information
  book1.displayInfo();