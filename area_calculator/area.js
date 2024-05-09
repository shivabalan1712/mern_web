"use strict";
// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}
// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}
// Main function to handle user input and calculate area
function calculateArea(shape) {
    switch (shape.toLowerCase()) {
        case "rectangle":
            const rectLength = parseFloat(prompt("Enter the length of the rectangle: "));
            const rectWidth = parseFloat(prompt("Enter the width of the rectangle: "));
            if (!isNaN(rectLength) && !isNaN(rectWidth)) {
                console.log(`Area of rectangle: ${calculateRectangleArea(rectLength, rectWidth)}`);
            }
            else {
                console.log("Invalid input. Please enter valid numbers.");
            }
            break;
        case "circle":
            const circleRadius = parseFloat(prompt("Enter the radius of the circle: "));
            if (!isNaN(circleRadius)) {
                console.log(`Area of circle: ${calculateCircleArea(circleRadius)}`);
            }
            else {
                console.log("Invalid input. Please enter a valid number.");
            }
            break;
        case "triangle":
            const triBase = parseFloat(prompt("Enter the base of the triangle: "));
            const triHeight = parseFloat(prompt("Enter the height of the triangle: "));
            if (!isNaN(triBase) && !isNaN(triHeight)) {
                console.log(`Area of triangle: ${calculateTriangleArea(triBase, triHeight)}`);
            }
            else {
                console.log("Invalid input. Please enter valid numbers.");
            }
            break;
        default:
            console.log("Invalid shape. Please choose rectangle, circle, or triangle.");
    }
}
// Test the program
const selectedShape = prompt("Enter the shape (rectangle, circle, or triangle): ");
calculateArea(selectedShape);
