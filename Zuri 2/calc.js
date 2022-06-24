function myCalculator() {
    var operation, num1, num2, result;
    operation = prompt("Choose an operator (+, -, *, / ): ");
    num1 = prompt("Enter first number: ");
    num2 = prompt("Enter second number: ");

    if (operation == "+") {
        result = num1 + num2;
    }
    else if (operation  == "-") {
        result = num1 - num2;
    }
    else if (operation == "*")  {
        result = num1 * num2;
    }
    else if (operation == "/")  {
        result = num1 / num2;
    }
    else {
        alert("Invalid Operation!");
    }
    alert("Your result is " + result);
}
myCalculator()