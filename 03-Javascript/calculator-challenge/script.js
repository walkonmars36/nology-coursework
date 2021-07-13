// Need to have a previous value - prevVal
// a new value - newVal
// an operator - mathOperator
// a result value - resultVal
// and a false value for decimal clicked to prevent user from entering multiple decimals

let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;

function numButPress(num) {
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
  document.getElementById("calc-entry").value = newVal;
}

function mathButPress(operator) {
  if (!resultVal) {
    prevVal = newVal;
  } else {
    prevVal = resultVal;
  }
  newVal = "";
  decimalClicked = false;
  mathOperator = operator;
  resultVal = "";
  document.getElementById("calc-entry").value = "";
}

function equalButPress() {
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
  document.getElementById("calc-entry").value = resultVal;
}

function clearButPress() {
  prevVal = "";
  newVal = "";
  resultVal = "";
  mathOperator = "";
  decimalClicked = false;
  document.getElementById("calc-entry").value = "0";
}
