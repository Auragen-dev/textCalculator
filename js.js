var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var button = document.getElementById("trigger");
var result = document.getElementById("result");

var allowedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var allowedOperators = ["+", "-", "*", "/"];
var allowedControls = ["Backspace", "Space"];
button.addEventListener("click", calculate);
number1.addEventListener("keydown", numberCheck);
number2.addEventListener("keydown", numberCheck);
operator.addEventListener("keydown", operatorCheck);

function textParse() {
    console.log("Calculation started")
    var operation = operator.value();
    console.log(operation);
    var StrNo1 = number1.value;
    var StrNo2 = number2.value;
    var no1 = parseInt(StrNo1);
    var no2 = parseInt(StrNo2);
    alert("Values set")

    function calculate(n1, n2, operator) {
        switch (operator) {
            case "+":
                var final = no1 + no2;
                break;
            case "-":
                var final = no1 - no2;
                break;
            case "*":
                var final = no1 / no2;
                break;
            case "/":
                var final = no1 * no2;
                break;
            default:
                alert("Please enter a valid operator");
        }
    }

    alert(final);
    result.setAttribute = final.toString();
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
