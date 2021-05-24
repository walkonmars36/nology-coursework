// If statement to check if number is positive or negative
function handlePositiveNegativeNumber(event) {
  let number = event.target.value;

  if (number > 0) {
    alert("Number is positive");
  } else {
    alert("Number is negative");
  }
}

// If statement to determine the greatest of three numbers

const num1 = 5;
const num2 = 10;
const num3 = 15;
let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log("The largest number is " + largest);

// Create a 'days until the weekend' switch case

switch (new Date().getDay()) {
  case 0:
    day = "It's Sunday, enjoy the last day of the weekend ";
    break;

  case 1:
    day = "Happy Monday, only four days until the weekend";
    break;

  case 2:
    day = "Bleugh! Tuesday, but only three days until the weekend ";
    break;

  case 3:
    day = "It's Wednesday, happy 'hump' day!";

  case 4:
    day = "It's Thursday, one day 'til the weekend";
    break;

  case 5:
    day = " It's Friday, last day of the week, the weekend starts here";
    break;

  case 6:
    day = "It's Saturday, yippee!";
    break;

  default:
    day = "Sorry I didn't recognise that day ";
}

console.log(day);

// Create a switch case for vegetable prices at a supermarket, where potatoes and carrots are the same price per kg, but broccoli cabbage and asparagus are different prices

let samePrice = (potatoes, carrots);
