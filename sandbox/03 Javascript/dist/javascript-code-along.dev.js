"use strict";

// If a name, is a coaches name, log "It's a coach"
const coachesName = "Mark";

if (coachesName == "Andy") {
  console.log("It's a coach");
} else {
  console.log("That is not a coach");
}

// If a greeting is bonjour, log "comment ca va?"
let greeting = "bonjour";

if (greeting == "hello") {
  console.log("Comment ca va?");
} else {
  console.log("You are not speaking French!");
}

// If a score reaches ten, log "You won the game 👏"
let score = 9;

if (score >= 10) {
  console.log("You won the game 👏");
} else {
  console.log("Keep trying");
}

// If age is greater than 65, log "Time to retire"
let age = 65;

if (age > 65) {
  console.log("Time to retire");
} else {
  console.log("keep working fool!");
}

// If has covid, log "Time to isolate", else "Keep social distancing"
let hasCovid = false;

if (hasCovid) {
  console.log("Time to isolate");
} else {
  console.log("Keep social distancing");
}

// If age is greater than 18 and is British, log "You can vote in the next election"
age = 18;
const isBritish = true;

if (age >= 18 && isBritish) {
  console.log("You can vote in the next election");
} else {
  console.log("You cannot vote");
}
