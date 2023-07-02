let checkBtn = document.getElementById("checkBtn");
let clearBtn = document.getElementById("clearBtn");

// Events
checkBtn.addEventListener("click", checkEvenOrOdd);

clearBtn.addEventListener("click", clearInput);

// checking the integer
function checkEvenOrOdd() {
    let numberInput = document.getElementById("numberInput");
    let result = document.getElementById("result");

    let numberStr = numberInput.value;

    // Check if the entered value is a decimal
    if (numberStr.includes(".")) {
        result.innerHTML = "Decimal values cannot be even or odd.";
    } else {
        // Get the input value and convert it to an integer
        let number = +numberStr;

        if (number % 2 === 0) {
            result.innerHTML = number + " is an even number.";
        } else {
            result.innerHTML = number + " is an odd number.";
        }
    }
}

// Clearing the input and output
function clearInput() {
    let numberInput = document.getElementById("numberInput");
    let result = document.getElementById("result");

    numberInput.value = "";
    result.innerHTML = "";
}
