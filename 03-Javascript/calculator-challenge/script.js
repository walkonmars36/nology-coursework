let prevVal = ""; // Stores previous entered value
let newVal = ""; // Stores currently entered value
let resultVal = ""; // Stores resulting value and displays to screen
let mathOperator = ""; // Stores the operator + - / *
let decimalClicked = false; // Initial state of decimal point

////// called when a number button is pressed
function numBtnPress(num) {
  // first check if a number has already been clicked
  if (resultVal) {
    // start a new number
    newVal = num;
    // reset resultVal in readiness for new result
    resultVal = "";
    // check for decimal point and stop user entering more than one.
  } else if (num === ".") {
    if (decimalClicked != true) {
      newVal += num;
      decimalClicked = true;
    }
  } else {
    newVal += num;
  }
  document.getElementById("calc-display").value = newVal;
}

////// called when an operator button's pressed
function operatorBtnPress(operator) {
  // first check if resultVal has a value
  // if not, then store the newVal as the prevVal ready for the calculation
  if (!resultVal) {
    prevVal = newVal;
  } else {
    // if there is a current result in resultVal, store that as the prevVal
    prevVal = resultVal;
  }
  // reset newVal, ready for new number
  newVal = "";
  // reset decimalClicked
  decimalClicked = false;
  // store the selected operator
  mathOperator = operator;
  // reset resultVal, ready to receive new result
  resultVal = "";
  // display prevVal and operator in the display
  document.getElementById("calc-display").value = prevVal + " " + mathOperator;
}

// called when the equals button is pressed
function equalBtnPress() {
  // reset decimalClicked
  decimalClicked = false;
  // convert string numbers to floats
  prevVal = parseFloat(prevVal);
  newVal = parseFloat(newVal);

  // perform calculations based on the operator stored in mathOperator
  switch (mathOperator) {
    case "+":
      resultVal = prevVal + newVal;
      break;
    case "-":
      resultVal = prevVal - newVal;
      break;
    case "*":
      resultVal = prevVal * newVal;
      break;
    case "/":
      resultVal = prevVal / newVal;
      break;
    default:
      resultVal = newVal; // if equals pressed by mistake before operator, leave everything as it is
  }
  // move resultVal into prevVal to make way for new calculations
  prevVal = resultVal;
  // and display that in the display
  document.getElementById("calc-display").value = resultVal;
}

// called when AC is pressed, resets all variables and display to initial state
function clearBtnPress() {
  prevVal = "";
  newVal = "";
  resultVal = "";
  operator = "";
  decimalClicked = false;
  document.getElementById("calc-display").value = "0";
}
