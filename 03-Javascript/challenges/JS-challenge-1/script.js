function calculateYearsUntilRetirement(event) {
  const currentAge = event.target.value;

  if (currentAge >= 65) {
    alert("You can retire");
  } else {
    const yearsLeft = 65 - currentAge;
    alert(`You have ${yearsLeft} years before you can retire`);
  }
}
