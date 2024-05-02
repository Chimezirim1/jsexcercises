// Create a class called MathUtils with a static method calculateArea that takes two arguments (length and width) and returns the area of a rectangle.
class MathUtils {
    static calculateArea(length, width) {
      return length * width;
    }
  }
  
  
// Call the calculateArea method directly on the MathUtils class to calculate the area without creating an object instance.
const area = MathUtils.calculateArea(5, 10);
  
  console.log(area); // Output: 50
