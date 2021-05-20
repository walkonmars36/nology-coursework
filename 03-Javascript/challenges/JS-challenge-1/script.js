function calculateYearsUntilRetirement(event) {
  const currentAge = event.target.value;

  if (currentAge >= 65) {
    alert("You can retire");
  } else {
    const yearsLeft = 65 - currentAge;
    alert(`You have ${yearsLeft} years before you can retire`);
  }
}

function getGreetingInFrench(event) {
  const greeting = event.target.value;

  if (greeting == "Hello") {
    alert("Bonjour");
  } else if (greeting == "Goodbye") {
    alert("Au revoir");
  } else {
    alert("I'm sorry I don't understand that!");
  }
}
