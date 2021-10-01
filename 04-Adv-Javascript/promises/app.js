console.log("hello");

// What is ap promise?
// A promise has 3 states - pending, resolved and rejected

// let marksPromise = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// marksPromise
//   .then((message) => {
//     console.log(message + ". I am in the THEN");
//   })
//   .catch((message) => {
//     console.log(message + ". I am in the CATCH");
//   });

// https://randomuser.me/api/

// const heading = document.querySelector("h1");
// const getRandomUser = () => {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((json) => (heading.innerHTML = json.results[0].name.first));
// };

// getRandomUser();

// make a request from https://api.punkapi.com/v2/beers

// Then from the response display the following  in a card div

// - name (h1)
// - tagline (h4)
// - description (p)
// - abv (h2/3)
// - the first food that it pairs well with (p)

const getBeer = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())

    .then((beerObject) => {
      console.log(beerObject);

      const beerName = beerObject[0].name;
      const tagline = beerObject[0].tagline;
      const description = beerObject[0].description;
      const abv = beerObject[0].abv;
      const foodPairing = beerObject[0].food_pairing[0];

      console.log(beerName);
      console.log(tagline);
      console.log(description);
      console.log(abv);
      console.log(foodPairing);
    });
};

getBeer();
