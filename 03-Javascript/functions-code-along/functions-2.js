// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, location, job title
// Outputs your statement to the console like so:
// I am currently a X living in Y and married to Z with N kids.
// Call that function three times with 3 diferent values for the arguments

const getDescription = (jobTitle, location, partner, amountOfChildren) => {
  const message = `I am currently a ${jobTitle} living in ${location} married to ${partner} with ${amountOfChildren} child`;

  console.log(message);
};

getDescription("student Developer", "Bristol", "Jude", "one");
getDescription("Counsellor", "Bristol", "Mark", "one");
getDescription("Doctor", "London", "Sally", "one");

// Write a function named calculateSupply that:
// takes 2 arguments: age and amount per day
// calculates the amount consumed for the rest of your life (based on a maximum age)
// outputs the result to the console like so:
// You will need X to last you until the ripe old age of Y
// Call that function three times passing in different values each time.

const calculateSupply = (currentAge, amountPerDay) => {
  const maximumAge = 90;
  const totalSnickersNeeded = amountPerDay * 365 * (maximumAge - currentAge);

  const message = `You will need ${totalSnickersNeeded} bars of Snickers to last you until the ripe old age of ${maximumAge}.`;

  console.log(message);
};

calculateSupply(55, 1);
calculateSupply(9, 1);
calculateSupply(49, 1);

// Temperature convertor - Let's make a celsius - fahrenheit convertor

const celsiusToFahrenheit = (celsius) => {
  const cent = celsius;
  const centToFahr = (cent * 9) / 5 + 32;
  const message = `${cent}\xB0C is ${centToFahr}\xB0F.`;
  console.log(message);
};

celsiusToFahrenheit(20);

// Puppy age calculator
const calculatePuppyAge = (age) => {
  const puppyAge = age * 7;
  console.log(`Your puppy is ${puppyAge} years old in dog years`);
};

calculatePuppyAge(4);
