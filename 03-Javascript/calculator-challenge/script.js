let prevVal = ""; // Stores previous entered value
let newVal = ""; // Stores currently entered value
let resultVal = ""; // Stores resulting value and displays to screen
let mathOperator = ""; // Stores the operator + - / *
let decimalClicked = false; // Initial state of decimal point

////// called when a number button is pressed
function numBtnPress(num) {
  // first check if a number has already been clicked
  if (resultVal) {
    newVal = num;
    resultVal = "";
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

////// () FOR OPERATOR BUTTON PRESS
function operatorBtnPress(operator) {
  if (!resultVal) {
    prevVal = newVal;
  } else {
    prevVal = resultVal;
  }
  newVal = "";
  decimalClicked = false;
  mathOperator = operator;
  resultVal = "";
  document.getElementById("calc-display").value = prevVal;
}

function equalBtnPress() {
  decimalClicked = false;
  prevVal = parseFloat(prevVal);
  newVal = parseFloat(newVal);

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
      resultVal = newVal;
  }

  prevVal = resultVal;
  document.getElementById("calc-display").value = resultVal;
}

function clearBtnPress() {
  prevVal = "";
  newVal = "";
  resultVal = "";
  operator = "";
  decimalClicked = false;
  document.getElementById("calc-display").value = "0";
}
