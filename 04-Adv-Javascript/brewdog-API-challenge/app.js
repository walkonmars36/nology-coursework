const getBeer = () => {
  const generateBeerBtn = document.querySelector(".beer-button");
  const h1BeerName = document.querySelector(".beer-name");
  const h4Tagline = document.querySelector(".tagline");
  const descriptionText = document.querySelector(".description");
  const alcByVolume = document.querySelector(".abv");
  const firstFood = document.querySelector(".food-pairing");

  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())

    .then((beerObject) => {
      const beerName = beerObject[0].name;
      const tagline = beerObject[0].tagline;
      const description = beerObject[0].description;
      const abv = beerObject[0].abv;
      const foodPairing = beerObject[0].food_pairing[0];

      h1BeerName.innerHTML = beerName;
      h4Tagline.innerHTML = tagline;
      descriptionText.innerHTML = description;
      alcByVolume.innerHTML = abv + "&percnt;" + " " + "abv";
      firstFood.innerHTML = "Pair with" + " " + foodPairing;
    });

  generateBeerBtn.addEventListener("click", getBeer);
};

getBeer();
