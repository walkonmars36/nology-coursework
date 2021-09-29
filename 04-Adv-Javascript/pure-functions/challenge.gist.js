// const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
//   // Making a full name upper case
//   const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
//   console.log(fullName);

//   // Days betweeen two dates, one is a birthday, days since birth
//   const bday = new Date(birthday);
//   const diff = aDate.getTime() - bday.getTime();

//   let ms = 1000 * 3600 * 24;

//   const result = diff / ms;
//   console.log(result);

//   // Finding news headlines that include the word tech
//   let myArray = [];
//   arrayName.forEach((item) => {
//     if (item.includes("Tech")) {
//       return myArray.push(item);
//     } else {
//       console.log("nope not tech");
//     }
//   });
// };

// const test = doesLotsOfThings("matt", "Bickell", "09/26/1993", ["Tech is booming", "Covid 19 yada yada yada", "Economy due for a resurgance!", "You can retrain in tech too!"]);

////////////////////////////// Refactoring ///////////////////////////////

// Making a full name upper case
const makeFullNameUpperCase = (firstName, lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

console.log(makeFullNameUpperCase("mark", "lawson"));

// Days betweeen two dates, one is a birthday, days since birth
const findDaysSinceBirth = (birthday) => {
  const todaysDate = new Date(); // this was a global variable, now local

  const birthDay = new Date(birthday);
  const differenceInMs = todaysDate.getTime() - birthDay.getTime();

  const msInDay = 1000 * 3600 * 24;

  const numberOfDaysSinceBirth = Math.floor(differenceInMs / msInDay);

  return `${numberOfDaysSinceBirth} days since birth.`;
};

console.log(findDaysSinceBirth("02/07/1966"));

const findHeadlinesIncludingTech = (headlineArr) => {
  const techHeadlineArr = headlineArr.filter((headline) => headline.toLowerCase().includes("tech"));

  return techHeadlineArr;
};

console.log(findHeadlinesIncludingTech(["Tech is booming", "Covid 19 yada yada yada", "Economy due for a resurgance!", "You can retrain in tech too!"]));
