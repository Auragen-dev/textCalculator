var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var button = document.getElementById("trigger");
var result = document.getElementById("result");
//  var text = textBox.value;

var allowedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var allowedOperators = ["+", "-", "*", "/"];
var allowedControls = ["Backspace", "Space"];
button.addEventListener("click", calculate);
number1.addEventListener("keydown", numberCheck);
number2.addEventListener("keydown", numberCheck);
operator.addEventListener("keydown", operatorCheck);

function calculate() {
    // var textArray = text.split;
    // var columnStack = [];
    // var rowStack = [];

    //for (var i = 0; i <= textArray.length; i++) {
    console.log("Calculation started")
    var operation = operator.value();
    console.log(operation);
    var StrNo1 = number1.value;
    var StrNo2 = number2.value;
    var no1 = parseInt(StrNo1);
    var no2 = parseInt(StrNo2);
    alert("Values set")
    switch (operation) {
        case "+":
            var final = no1 + no2;
            alert("+");
            break;
        case "-":
            var final = no1 - no2;
            break;
        case "*":
            var final = no1 / no2;
            break;
        case "/":
            var final = no1 * no2;
            //columnStack.push(rowStack);
            break;
        default:
            //rowStack.push(textArray[i])
            alert("Please enter a valid operator");
        //}

        //console.log(rowStack);
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
