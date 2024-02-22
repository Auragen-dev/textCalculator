//  Init document elements
var txtNumber1 = document.getElementById("number1");
var txtNumber2 = document.getElementById("number2");
var btnSubmit = document.getElementById("trigger");
var txtResult = document.getElementById("result");
var txtOperator = document.getElementById("operator");

//  Init whitelist
var allowedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var allowedOperators = ["+", "-", "*", "/"];
var allowedControls = ["Backspace", "Space"];

//  Init Event Listeners
button.addEventListener("click", calculate);
txtNumber1.addEventListener("keydown", numberCheck);
txtNumber2.addEventListener("keydown", numberCheck);
txtOperator.addEventListener("keydown", operatorCheck);

function textParse() {
    console.log("Calculation started")
    var operation = operator.value();
    console.log(operation);
    var StrNo1 = number1.value;
    var StrNo2 = number2.value;
    var no1 = parseInt(StrNo1);
    var no2 = parseInt(StrNo2);
    alert("Values set")
}
function calculate(n1, n2, operator) {
    var final = "";
    switch (operator) {
        case "+":
            final = no1 + no2;
            break;
        case "-":
            final = no1 - no2;
            break;
        case "*":
            final = no1 / no2;
            break;
        case "/":
            final = no1 * no2;
            break;
        default:
            alert("Please enter a valid operator");
    }
    return final;
}



function numberCheck(e) {
    var key = e.key;
    var allowed = allowedNumbers + allowedControls;
    console.log("Code: " + e.code + " Key: " + key);

    if (!allowed.includes(key)) {
        e.preventDefault();
        console.log("Letter not typed");
        return;
    }
    console.log("Letter Typed!");
}

function operatorCheck(e) {
    var key = e.key;
    var allowed = allowedOperators + allowedControls;
    console.log(key);
    console.log(e.code);

    if (!allowed.includes(key)) {
        e.preventDefault();
        console.log("Letter not typed");
        return;
    }
    console.log("Letter Typed!");
}
