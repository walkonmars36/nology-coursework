// document.querySelector(".translator-btn").addEventListener("click", () => {
//   //get the input value
//   const englishWord = document.querySelector(".input-box").value;

//   // if word matches put translation into DOM
//   if (englishWord === "hello") {
//     document.querySelector(".translate-result").innerHTML = "bonjour";
//   } else if (englishWord === "goodbye") {
//     document.querySelector(".translate-result").innerHTML = "au revoir";
//   } else {
//     document.querySelector(".translate-result").innerHTML = "unavailable";
//   }
// });

// make the code more testable
// decouple logic
// 1. Function that translates English to French
// 2. Some DOM interaction in an event listener

// pure functions accept inouts and return outputs
const translateEnglishToFrench = (englishWord) => {
  if (englishWord === "hello") {
    return "bonjour";
  } else if (englishWord === "goodbye") {
    return "au revoir";
  } else {
    return "unavailable";
  }
};

document.querySelector(".translate-btn").addEventListener("click", () => {
  const englishWord = document.querySelector(".input-box").value;
  const frenchWord = translateEnglishToFrench(englishWord);

  document.querySelector(".translate-result").innerHTML = frenchWord;
});
