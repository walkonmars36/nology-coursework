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

/**
 * A function that takes a score input and returns a letter grade.
 * If the score is:
 *  100 - 80: "A"
 *  79 - 70: "B"
 *  79 - 60: "C"
 *  59 - 50: "D"
 *  49 - 40: "E"
 *  39 - 0: "F"
 * If the score is above 100, less than 0, or not a number it should return "Score unavailable"
 *
 *
 */
const getGrade = (score) => {
  let grade;

  switch (true) {
    case score <= 100 && score >= 80:
      grade = "A";
      break;
    case score <= 79 && score >= 70:
      grade = "B";
      break;
    case score <= 69 && score >= 60:
      grade = "C";
      break;
    case score <= 59 && score >= 50:
      grade = "D";
      break;
    case score <= 49 && score >= 40:
      grade = "E";
      break;
    case score <= 39 && score >= 0:
      grade = "F";
      break;

    case score > 100 || score < 0:
      grade = "Score unavailable";
      break;
  }

  return grade;
};

console.log(getGrade("90"));

///////////////////////////////////////////////
///////////////////////////////////////////////

const coaches = ["Andy", "Sam", "Bex"];

const newCoaches = coaches.map((coach) => {
  return "Coach - " + coach;
});
console.log(newCoaches);
