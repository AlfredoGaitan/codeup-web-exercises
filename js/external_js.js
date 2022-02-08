"use strict";

// console.log('Hello from External JavaScript!');
// alert("Welcome to my Website!.");
//
// var userResponse = prompt("What's your favorite color?");
// alert("Great, " + userResponse + " is my favorite color too.");
// // console.log(userChoice);
// //
// // if(userChoice){
// //     alert("Wise choice!");

// var littleMermaid = Number(prompt("How many days did you rent Little Mermaid for?"));
//
// var brotherBear = Number(prompt("How many days did you rent Brother Bear for?"));
//
// var Hercules = Number(prompt("How many days did you rent Hercules for?"));
//
// var total = littleMermaid + brotherBear + Hercules;
//
// alert("Your total cost for the rentals is " + (total * 3));

var googleHours = Number(prompt("How many hours did you work for google?"));

var googlePay = 400;

// alert('You made ' + (googleHours * 480) + ' USD')

// var amazonHours = Number(prompt("How many hours did you work for amazon?"));
//
// var amazonPay = 380;
//
// var FBhours = Number(prompt("How many hours did you work for FB?"));
//
// var FBPay = 350;
//
// var totalPay = (googleHours * googlePay) + (amazonHours * amazonPay) + (FBhours * FBPay);
//
// alert("You will be paid " + totalPay + " this week");

// var pricePerDayInDollars = 3;
// var daysofLittleMermaid = Number(prompt("How many days are you renting the Little Mermaid?"));
// var daysofBrotherBear = Number(prompt("How many days are you renting the Brother Bear?"));
//
// var daysofHercules = Number(prompt("How many days are you renting the Hercules?"));
//
// var total = (daysofLittleMermaid + daysofBrotherBear + daysofHercules) * pricePerDayInDollars;
//
// alert("Your total will be $" + total);

var classNotFull = confirm("Is the class full?");
var noConflict = confirm("Do you have a schedule conflict?");
var canEnroll =(classNotFull && noConflict);
alert("It is " + canEnroll + "that you can enroll n this class");





