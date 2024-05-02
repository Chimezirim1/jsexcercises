
// Create a class called Product with a property for price.class Product {
    constructor() {
      this._price = 0;
    }
  

// Implement a getter for the price property that returns the formatted price with a currency symbol (e.g., "$").
get price() {
    return $${this._price.toFixed(2)};
  }


// Implement a setter for the price property that validates the input value to ensure it's a positive number before assigning it to the internal property.
set price(value) {
    if (typeof value === "number" && value >= 0) {
      this._price = value;
    } else {
      console.log("Invalid price. Please enter a positive number.");
    }
  }



// Create a Product instance and try setting an invalid price using the setter. Observe how the validation prevents incorrect values.
const product = new Product();
console.log(product.price); // Output: $0.00

product.price = 25.99;
console.log(product.price); // Output: $25.99

product.price = -10; // Output: Invalid price. Please enter a positive number.
console.log(product.price); // Output: $25.99 (remains unchanged)