var groceryList = [ 'bread', 'eggs', 'butter', 'milk'];
console.log(groceryList[2])
console.log('I have to buy ' + groceryList[0]);
var prices = [2,4,5,4];

create an array of 4 family mbrs,  friends, or people/pets you know.
console.log the 1st and last item
var familyList = ['Alma', 'Jax', 'Alfredo', 'Brianna', 'Isaiah'];
console.log(familyList[1]);
console.log(familyList[4]);


console.log a string stating relationship to one of the array elements , ex..'Nathan is my cousin'

console.log(familyList[3] + ' is my daughter!')

for (var i = 0; i < groceryList.length; i++){
    if (i !== groceryList.length -1){
        console.log('i have to buy ' + groceryList[i] + ' and...');
    }else {
        console.log('i have to buy ' +groceryList[i] + '.');
    }
    console.log('at index ' + i + ': ' + groceryList[i]);
    console.log('at index ' + i);
    console.log(groceryList[i]);
    console.log('I have to buy ' +  groceryList[i] + ' and...');
}
index starts at zero
length starts at one

Mini exercise 'array"
Given an array
    var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
First, create a for loop that generates the output:
    ```
San Antonio
Austin
Dallas
Houston
```
Then elaborate on the loop output to generate output like:
    ```
Student number 1 lives in San Antonio
Student number 2 lives in Austin
Student number 3 lives in Dallas
Student number 4 lives in Houston
```
Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
for( var i =0; i < cities.length; i++){
    //console.log(cities[i]);
    console.log('Student number 1 ' + (i+1) + ' lives in ' + cities[i]);
}

ForEach loop
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
prices.forEach(function (price, index){
    console.log('Item number ' + (index + 1) + ' costs $' +price);
});

groceryList.push('potatoes');
console.log(groceryList);
groceryList.pop();
console.log(groceryList);

groceryList.unshift('sliced cheddar');
console.log(groceryList);
groceryList.shift();
console.log(groceryList);

console.log(groceryList.indexOf('butter'));
var indexOfButter = groceryList.indexOf('butter');
console.log('The butter is at index ' + indexOfButter);

groceryList[2] = 'peanut butter';
console.log(groceryList);
groceryList[indexOfButter] = 'butter';
console.log(groceryList);

var firstHalfOfList = groceryList.slice(0,2); //up to but not including, so if needing index 0 3, need to include the #3, if not it will cut off to index #2
console.log(firstHalfOfList);
//console.log(groceryList);
var secondHalfOfList = groceryList.slice(2);
console.log(secondHalfOfList);
firstHalfOfList.push('peanut butter');
console.log(firstHalfOfList);
groceryList = firstHalfOfList.concat(secondHalfOfList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

groceryList.sort();//keep 'strings' in lowercase, if not issues will arise with ASCII software.
console.log(groceryList);

var hamletQuote = 'To be or not to be, that is the question';
var noCommasHamletQuote = hamletQuote.replace('', '').toLowerCase();
var hamletQuoteArray = noCommasHamletQuote.split(' ');
console.log(hamletQuoteArray);

hamletQuoteArray.reverse();
console.log(hamletQuoteArray);

var hamletQuoteBackwards = hamletQuoteArray.join(' ');
console.log(hamletQuoteBackwards);
var hamletQuoteWordList = hamletQuoteArray.join(',');
console.log(hamletQuoteWordList);
var bringBackOriginalQuote = hamletQuoteWordList.replaceAll(',',' ');
var theOriginalArray = bringBackOriginalQuote.split(' ');
console.log(theOriginalArray);
theOriginalArray.reverse();
var theOriginalQuote = theOriginalArray.join(' ');
console.log(theOriginalQuote);


//Assessment problems
// function isNumeric(input){
//     return isNaN(parseFloat(input));//refer to this problem with other number/math equations
//     //return isNaN(Number(input))
// }
//
//
// function isANumber(input){
//     return typeof input === 'number'
// }
//
// function increment(input){
//     if(isNaN(parseFloat(input))){
//         return false;
//     }
//     return parseFloat(input) +1;
// }
// //return (isNaN(parseFloat(input))) ? false : parseFloat(input) +1;//refactored version
//
// function decrement(input){
//     if(isNaN(parseFloat(input))){
//         return false;
//     }
//     return parseFloat(input) -1;
// }
//
// function getHighestNumber(input1, input2, input3){
//     if (isNaN(parseFloat(input1)) || (isNaN(parseFloat(input2)) || isNaN(parseFloat(input3))){
//         return false;
//     }
// }
//
// function getHighestNumber(num1,num2,num3){
//     if (typeof num1 !== 'number'|| typeof num2 !== 'number'|| typeof num3 !== 'number'){
//         return false
//     }
//     return Math.max(num1,num2,num3)
// }
//
// //     if (isNaN(parseFloat(input1))){
// //         return false;
// //     }
// //     if(isNaN(parseFloat(input2))){
// //         return false;
// //     }
// //     if(isNaN(parseFloat(input3))){
// //         return false;
// //     }
// //     var num1 =parseFloat(input1);
// //     var num2 = parseFloat(input2);
// //     var num3 = parseFloat(input3);
// //
// //     if(num1 > num2 && num 2 > num3){
// //         return num1;
// //     } else if (num2 > num1 && num2 > num3){
// //         return  num2;
// //     }else {
// //         return num3;
// //     }
// // }
//
// function parseNumber(num){
//     return parseFloat(num)
// }
//
// function add(num1, num2){
//     if (isNaN(parseFloat(num1)) || (isNaN(parseFloat(num2)){
//         return false;
//     }
//     return parseFloat(num1) + parseFloat(num2);
// }
//
// function multiply(input1, input2){
//     if(isNumeric(input1) && isNumeric(input2)){
//         return input1 * input2;
//     }else {
//         return false;
//     }
// }
//
// function square(input){
//     if(isNumeric(input) && input !== null){
//         return input * input;
//     }else {
//         return false;
//     }
// }
//
// function sumOfSquares(input1, input2){
//     if(square(input1) === false || square(input2) === false){
//         return false
//     }
//     return square(input1) + square(input2);
// }
//
// function isPalindrome(input){
//     if(typeof input !== 'string'){
//         return false;
//     }
//     input = input.toLowerCase();
//     return input === input.split('').reverse().join('');
//
// }
//     return typeof input === 'string' && input.toLowerCase().split('').reverse().join('') === input.toLowerCase()










