"use strict";

/* ########################################################################## */
// var isAdmin = false;
// //var isLoggedIn = true;
//
// //show admin if user is logged and an admin
// //falsey 0, null, NaN, undefined, false...
//
// if(isAdmin){
//     alert('Displaying admin panel...');
//
// }
//alert('Will this run?');

// var productInStock = false;
//
// if (productInStock) {
//     alert('Display a purchase button');
// }  else{
//     alert('Display a message that says "OUT OF STOCK"');
// }
//
// if (productInStock){
//     productInStock = false;
//     alert('Display a purchase button');
//
//}

// var weather = 'sunny';
//
// if (weather === 'sunny'){
//     alert('Putting on sunglasses...');
// } else if (weather === 'rainy'){
//     alert('Put on rain coat');
// } else if (weather === 'snowing'){
//     alert('Put on coat');
// } else if (weather === 'windy'){
//     alert('Fly a kite');
// } else{
//     alert('I\'m goin to stay inside.');
// }

//nested conditionals
// var weatherCondition = 'sunny';
// var temp = 90;
// function alertBasedOnTemp(temp)
// //if (weatherCondition === 'sunny'){
//     //alert('Put on some sunglasses');
//     if (temp <65){
//         alert('Putting on a jacket');
// } else {
//     alert('Putting on fancy shirt');
//     }
// }
// if (weatherCondition === 'sunny'){
//     alert('Put on sunglasses');
//     alertBasedOnTemp(temp);
//   else if (weatherCondition === 'cloudy'){
//         alert('Putting on a jacket');
//     } else {
//         alert('Putting on a fancy shirt');
//     }
// } else{
//     alert('Staying inside');
// }
//ternary (condition) ? returnValue :
// var someNumber = 9;
// var divisibleByFive = (someNumber % 5 === 0) ? 'Number is divisible by five.' : 'Number is not divisible by five.'
// alert(someNumber + ' ' + divisibleByFive);

// var divisibleByFive;
// if(someNumber % 5 === 0){
//     divisibleByFive = 'Number is divisible by five.';
// } else {
//     divisibleByFive = 'Number is not divisible by five.';
// }
// alert(someNumber + ' ' + divisibleByFive);


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//function analyzeColor(str){
//     if(str === 'blue'){
//         return 'the sky is blue';
//     } else if (str === 'green'){
//         return 'grass is green';
//     } else if (str === 'red'){
//         return 'Strawberries are red';
//     }else{
//         return 'I don\'t want to see any other colors but blue, green and red!' ;
//     }
//
//
// }
//console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet';
//var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(str){
//     switch(str){
//         case 'blue':
//             return'the sky is blue';
//
//         case 'red':
//             return 'strawberries are red';
//
//         case 'green':
//             return 'grass is green';
//
//         default:
//             return 'I don\'t want to see any other colors but blue, green and red!';
//     }
// }
// analyzeColor('green');
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var color = prompt('Tell me your favorite colors');
// alert(analyzeColor(color));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckNum, priceNum){
//     switch(luckNum){
//         case 0:
//             return amoutOwed;
//         case 1:
//             return luckNum - (priceNum * .1);
//         case 2:
//             return luckNum - (priceNum * .25);
//         case 3:
//             return luckNum - (priceNum * .35);
//         case 4:
//             return luckNum - (priceNum * .5);
//         case 5:
//             return 0;
//     }
// }
// console.log(calculateTotal(0, 100), 100) // returns 100
// console.log(calculateTotal(4, 100), 50) // returns 50
// console.log(calculateTotal(5, 100), 50) // returns 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// function numToDollars(num){
//     return '$' + num.toFixed(2);
// }
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBillDollars = Number(prompt('Please enter your total bill in dollars'));
// var finalBillDollars =  calculateTotal(luckyNumber, totalBillDollars);
// var billMessage = 'your lucky number is ' + luckyNumber + '. your original bill was ' + totalBillDollars + '. your lucky number is ' + finalBillDollars;
//
// alert(billMessage);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var willEnterNum = confirm('do you want to enter a number?');


//if(willEnterNum){
    // do the number things
    //get user input & store in var == numInput
    var numInput = Number(prompt('please enter a number'));
    console.log(numInput)

    if (!isNaN(numInput)) {
    //     alert('input is a valid number');
    // } else {
    //     alert('Incorrect data type!');
    // }
        if (numInput % 2 === 0)
            alert('number is even');
        else {
            alert('number is odd')
        }
        alert( numInput + 100)

        } else {
        alert('incorrect data type!');

    }
}

    //validate the user input(number)
    //if valid alert num message, if not else alert incorrect data type

}