const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const register = document.getElementById("register");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from the inputs

  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();

  if (fullNameValue === "") {
    //add invalid class and show invalid message
    setInvalidFor(fullName, "Name cannot be blank");
  } else {
    //add valid class
    setValidFor(fullName);
  }

  if (emailValue === "") {
    //add invalid class and show invalid message
    setInvalidFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setInvalidFor(email, "Email is not valid");
  } else {
    //add valid class
    setValidFor(email);
  }
  // set Thank you message if both conditions are true
  if (fullNameValue && emailValue) {
    register.textContent = `Thank you for registering ${fullNameValue}`;
  }
}

function setInvalidFor(input, message) {
  const formInput = input.parentElement; // .formInput div
  const errorMessage = formInput.querySelector("small");

  // and add invalid class
  formInput.className = "form__input invalid";
  // add error message inside small tag
  errorMessage.innerText = message;
}

//add valid class
function setValidFor(input) {
  const formInput = input.parentElement;
  formInput.className = "form__input valid";
}

// Function using Regex expression to check for valid email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const summaryPoints = ["Intro", "SCSS", "Disco", "Challenges"];
const summaryList = document.getElementById("summary-list");
const summaryPointsHTML = summaryPoints.map((summaryPoint) => {
  return `<li>${summaryPoint}</li>`;
});

summaryList.innerHTML = summaryPointsHTML.join("");
