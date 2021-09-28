// const fruitObjectArray = [{fruit: "apple"}, {fruit: "banana"}, {fruit: "orange"}];

// const cheeseObjectArray = [{cheese: "cheddar"}, {cheese: "gouda"}, {cheese: "brie"}];

// // console.log(cheeseObjectArray[0].cheese);

// // console.log(fruitObjectArray[0].fruit);
// // console.log(fruitObjectArray[1].fruit);
// // console.log(fruitObjectArray[2].fruit);

// // iterate over our array -> array of the values

// // FRUITS
// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//   const fruitValue = fruitObject.fruit;
//   return fruitValue;
// });

// // console.log(fruitValueArray);

// // CHEESE
// const cheeseValueArray = cheeseObjectArray.map((cheeseObject) => {
//   const cheeseValue = cheeseObject.cheese;
//   return cheeseValue;
// });

// // console.log(cheeseValueArray);

// // FRUITS
// const searchTerm = "apple";

// const matchingFruitArray = fruitObjectArray.filter((fruitObject) => {
//   const fruitMatch = fruitObject.fruit.includes(searchTerm);
//   return fruitMatch;
// });

// // console.log(matchingFruitArray);

// // CHEESE
// const searchTerm2 = "go";

// const matchingCheeseArray = cheeseObjectArray.filter((cheeseObject) => {
//   const cheeseMatch = cheeseObject.cheese.includes(searchTerm2);
//   return cheeseMatch;
// });

// // console.log(matchingCheeseArray);

// // FRUITS
// const generateFruitHTML = (fruitArray) => {
//   const html = fruitArray.map((fruitObject) => {
//     return `<li>${fruitObject.fruit}</li>`;
//   });
//   return html.join("");
// };

// // console.log(generateFruitHTML(fruitObjectArray));

// // CHEESE
// const generateCheeseHTML = (cheeseArray) => {
//   const htmlCheese = cheeseArray.map((cheeseObject) => {
//     return `<li>${cheeseObject.cheese}</li>`;
//   });
//   return htmlCheese.join("");
// };

// console.log(generateCheeseHTML(cheeseObjectArray));

const fruitObjectArray = [
  {fruit: "apple", rating: 8, price: 150},
  {fruit: "banana", rating: 5, price: 200},
  {fruit: "orange", rating: 6, price: 120},
];

// console.log(fruitObjectArray[1].price);

// const generateFruitHTML = (fruitArray) => {
//   const html = fruitArray.map((fruitObject) => {
//     const cardHTML = `
//     <div>
//       <h3>${fruitObject.fruit.charAt(0).toUpperCase() + fruitObject.fruit.slice(1)}</h3>
//       <p>This fruit's rating is ${fruitObject.rating} / 10</p>
//       <p>Buy now for ${fruitObject.price.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</p>
//     </div>
//     `;
//     return cardHTML;
//   });
//   return html.join("");
// };

const generateFruitHTML = (fruitArray) => {
  const html = fruitArray.map((fruitObject) => {
    // convert price from 100 to 1.50 etc
    const price = (fruitObject.price / 100).toFixed(2);
    //capitalise first letter of fruit
    const capitalised = fruitObject.fruit.charAt(0).toUpperCase() + fruitObject.fruit.slice(1);
    const cardHTML = `
    <div>
      <h3>${capitalised}</h3>
      <p>This fruit's rating is ${fruitObject.rating} / 10</p>
      <p>Buy now for £${price}</p>
    </div>
    `;
    return cardHTML;
  });
  return html.join("");
};
``;

// ALTERNATIVE TO UPPER CASE METHOD
// fruitObject.fruit[0].toUpperCase()

// sort fruitObjects by rating, highest first
const sortByHighestRating = fruitObjectArray.sort((a, b) => b.rating - a.rating);

console.log(generateFruitHTML(sortByHighestRating));

// sort by highest price
const sortByhighestPrice = fruitObjectArray.sort((a, b) => b.price - a.price);

console.log(generateFruitHTML(sortByhighestPrice));
