/*
 * Chris Castaneda
 * September 13th, 2014
 * SDI
 * Lab 5
 */

 //  Variables

    var num1;
    var num2;
    var numReturn;

// Functions

    var add = function(num1, num2)
    {
        var numAdd = num1 + num2;
        return numAdd;
    };
    
    var sub = function(num1, num2)
    {
         var numSub = num1 - num2;
        return numSub;
    };
    
    // var mult = function(num1, num2)
    // {
         // var numMult = num1 * num2;
        // return numMult;
    // };
    
    // var divide = function(num1, num2)
    // {
         // var numDiv = num1 / num2;
        // return numDiv;
    // };
    

// MAIN

    num1 = parseFloat(prompt( "Enter your first number: "));
    num2 = parseFloat(prompt("Enter your second number: "));
    
    // Addition
    
    numReturn = add(num1, num2);
    console.log(num1 + " + " + num2 + " = " + numReturn);

    // Subtraction
    
    numReturn = sub(num1, num2);
    console.log(num1 + " - " + num2 + " = " + numReturn);
    
    

     






