let checkBtn = document.getElementById("checkBtn");
let clearBtn = document.getElementById("clearBtn");

// Events
checkBtn.addEventListener("click", checkEvenOrOdd);

clearBtn.addEventListener("click", clearInput);

// checking the integer
function checkEvenOrOdd() {
    let numberInput = document.getElementById("numberInput");
    let result = document.getElementById("result");

    // Get the input value and convert it to an integer
    let number = parseInt(numberInput.value);

    if (number % 2 === 0) {
        result.innerHTML = "The number is even.";
    } else {
        result.innerHTML = "The number is odd.";
    }
}

// Clearing the input and output 
function clearInput() {
    let numberInput = document.getElementById("numberInput");
    let result = document.getElementById("result");

    numberInput.value = "";
    result.innerHTML = "";
}

  
