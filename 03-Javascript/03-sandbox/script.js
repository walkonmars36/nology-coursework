const findSmallestNumber = (number1, number2) => {
  return Math.min(number1, number2);
};

console.log(findSmallestNumber(100, 200));

const score = 300;
const highScore = 325;

const checkIfNewHighScore = (score, highScore) => {
  if (score > highScore) {
    return "You got a new high score";
  }
  if (score === highScore) {
    return "So close!";
  } else {
    return "Better luck next time";
  }
};

console.log(checkIfNewHighScore(350, 325));

////////////////////////////////////////////////
///////////////////////////////////////////////

let tempInCelsius = 15;

const celsiusToFahrenheit = (tempInCelsius) => {
  let cent = tempInCelsius;
  const centToFahr = (cent * 9) / 5 + 32;
  return `${cent} degrees celsius is ${centToFahr} degrees fahrenheit `;
};

console.log(celsiusToFahrenheit(15));
