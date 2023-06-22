function checkEvenOrOdd() {
  var numberInput = document.getElementById("numberInput");
  var result = document.getElementById("result");

  // Get the input value and convert it to an integer
  var number = parseInt(numberInput.value);

  if (number % 2 === 0) {
    result.innerHTML = "The number is even.";
  } else {
    result.innerHTML = "The number is odd.";
  }
}

function clearInput() {
  var numberInput = document.getElementById("numberInput");
  var result = document.getElementById("result");

  numberInput.value = "";
  result.innerHTML = "";
}
