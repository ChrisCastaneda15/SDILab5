/*
 * Chris Castaneda
 * September 13th, 2014
 * SDI
 * Lab 5
 */

 //  Variables

    var num1;
    var num2;
    var operation;
    var numReturn;

// Functions

    var add  = function(num1, num2)
    {
        var numAdd = num1 + num2;
        return numAdd;
    };
    
    var sub  = function(num1, num2)
    {
         var numSub = num1 - num2;
        return numSub;
    };
    
    var mult = function(num1, num2)
    {
         var numMult = num1 * num2;
        return numMult;
    };
    
    var div  = function(num1, num2)
    {
         var numDiv = num1 / num2;
        return numDiv;
    };
    

// MAIN
    
    num1 = parseFloat(prompt( "Enter your first number: "));
    num2 = parseFloat(prompt("Enter your second number: "));
    operation = prompt("Which operation do you wish to perform?\nType add, subtract, multiply, or divide");
    
    // Addition
    if(operation == "add")
    {
    numReturn = add(num1, num2);
    console.log(num1 + " + " + num2 + " = " + numReturn);
    }
    
    // Subtraction
    else if(operation == "subtract")
    {
    numReturn = sub(num1, num2);
    console.log(num1 + " - " + num2 + " = " + numReturn);
    }
    // Multiplication
    else if(operation == "multiply")
    {
    numReturn = mult(num1, num2);
    console.log(num1 + " X " + num2 + " = " + numReturn);
    }
    // Division
    else if(operation == "divide")
    {
    numReturn = div(num1, num2);
        if (num1 == 0 || num2 == 0)
        {
            console.log("You can't divide by 0!");
        }
        else
        {
            console.log(num1 + " / " + num2 + " = " + numReturn);
        };
    }
    else
    {
        console.log("You did not enter a correct operation.");
    };
    



