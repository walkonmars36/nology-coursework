// 1. Write a function to find the perimeter of a rectangle
const calculatePerimeter = (width, height) => {
  return width * 2 + height * 2;
};

console.log(calculatePerimeter(1, 1));

// 2. Write a function to find the area of a circle when given a radius, print the area to the console
const calculateArea = (radius) => {
  const area = Math.PI * radius * radius;

  console.log(area);
};

calculateArea(2);

// 3. Now do the same to find the circumferance of a circle
const calculateCircumference = (R) => {
  const circumference = 2 * Math.PI * R;

  console.log(circumference);
};

calculateCircumference(2);
