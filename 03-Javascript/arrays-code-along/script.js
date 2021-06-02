////////////////////// create coaches array
// const coaches = ["Andy", "Sam", "Bex"];
// console.log(coaches[1]);

/////////////////////// create an array of pets
// const pets = ["Fido", "Rusty", "Jack"];
// console.log(pets[2]);

// create a sample for loop
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

// or, using the .forEach() method
// pets.forEach((pet) => {
//   console.log(pet);
// });

// and for the coaches
// coaches.forEach((coach) => {
//   console.log(coach);
// });

/////////////////////////////////////////////////////////////////////////// use the .map() method to prepend the word coach to each coach
// const newCoaches = coaches.map((coach) => {
//   return "Coach - " + coach;
// });
// console.log(newCoaches);

////////////////////////////////////////////////////////////////////////// use the .map() method to prepend the word pet to each pet
// const newPets = pets.map((pet) => {
//   return "Pet - " + pet;
// });
// console.log(newPets);

/////////////////////////////////// names array using .filter()
// const names = ["Andy", "Sam", "Bex"];

//  .filter()
// const coaches = names.filter((name) => {
//   if (name.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(coaches);

// .filter and .includes()
// const coaches = names.filter((name) => {
//   if (name.includes("m")) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(coaches);

/////////////////////////////////////// create a scores array
const scores = [8, 9, 12];
const higherThanTen = scores.filter((score) => score > 10);

// inline arrow function above replaces if statement below and doesn't need curly braces if function is all on one line
//   if (score > 10) {
//     return true;
//   } else {
//     return false;
//   }

console.log(higherThanTen);
