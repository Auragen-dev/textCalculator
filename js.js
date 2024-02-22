//  Init document elements
var txtNumber1 = document.getElementById("number1");
var txtNumber2 = document.getElementById("number2");
var txtResult = document.getElementById("result");
var txtOperator = document.getElementById("operator");

//  Init whitelist
var allowedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
var allowedOperators = ["+", "-", "*", "/"];
var allowedControls = ["Backspace", "Space"];

//  Init Event Listeners
txtNumber1.addEventListener("keydown", numberCheck);
txtNumber2.addEventListener("keydown", numberCheck);


function submit(op) {
    var n1 = txtNumber1.value;
    var n2 = txtNumber2.value;
    var operator = op;


    //  Checking if input data is valid and needs reinput
    if (n1 == "" || n2 == "") { alert("Please enter a number."); return; }
    if (op.includes(allowedOperators)) { alert("Please enter a valid operator."); return; }

    var result = calculate(n1, n2, operator);
    txtResult.innerHTML = result.toString();
}
function calculate(n1, n2, operator) {
    var no1 = parseFloat(n1);
    var no2 = parseFloat(n2);
    var final = "";
    switch (operator) {
        case "+":
            final = no1 + no2;
            break;
        case "-":
            final = no1 - no2;
            break;
        case "*":
            final = no1 * no2;
            break;
        case "/":
            final = no1 / no2;
            break;
        default:
            alert("Please enter a valid operator");
    }
    return final;
}



function numberCheck(e) {
    var key = e.key;
    var allowed = allowedNumbers + allowedControls;

    if (!allowed.includes(key)) {
        e.preventDefault();
        return;
    }
}
