<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Objects Intro</title>
</head>
<body>
<h1>Intro to Objects</h1>
<script>
    "use strict";
    /*
    JS Objects
    - like a named index array
    - used to store related state and behavior
    - where arrays are good for storing lists of data, objects store related aspects of a greater structure
    - we have already used objects: String, Array, Math, Number
    */
    // Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)
    // New Object Instance
    // var dog = new Object();
    // console.log(typeof dog);
    // Object Literal Notation
    // var cat = {};
    // console.log(typeof cat);
    // Setting Properties on a Custom Object
    // create a pet object that has the following properties...
    // givenName
    // age
    // species
    // hasOffspring
    // valueInDollars
    // var pet = {};
    //
    // pet.givenName = 'Sparkles';
    // pet.age = 12;
    // pet.species = 'turtle';
    // pet.hasOffspring = true;
    // pet['value-in-dollars'] = 400; // alternative syntax for assigning properties
    // console.log(pet);
    // var pet2 = {
    //     givenName: 'Rex',
    //     age: 5,
    //     species: 'dog',
    //     hasOffspring: false,
    //     valueInDollars: 'priceless'
    // };
// Peeking into an Object
    // console.log(pet);
// Accessing Properties on an Object
    // console.log(pet.givenName);
    // console.log(pet2.givenName);
    // console.log(pet2['givenName']);
    //
    // pet.givenName = "Sabrina";
    // console.log(pet.givenName);
// !! MINI-EXERCISE 1 !!
// Nested Values
    // Add the following to a pet object...
    // altNames
    // vitals: averageTemp, restingHeartRate, isHungry
    // var pet3 = {
    //     name: 'Bowser',
    //     age: 6,
    //     species: 'dog',
    //     hasOffspring: false,
    //     valueInDollars: 'priceless',
    //     altNames: [
    //         'Bowser Boy',
    //         'Bowser Man',
    //         'Bowser Buddy',
    //         'Puggle Wuggle Boy'
    //     ],
    //     vitals: {
    //         averageTempDegF: 101,
    //         averageRestingHeartRate: 80,
    //         isHungry: true
    //     }
    // };
    // log if Bowser is hungry
    // log Bowser's average heartRate
    // log Bowser's most recent alternative name
    // change age to 7 and isHungry to false
// Arrays of Objects
    // var pets = [
    //     {
    //         givenName: 'Spot',
    //         isDog: true
    //     },
    //     {
    //         givenName: 'Max',
    //         isDog: false
    //     },
    //     {
    //         givenName: 'Goldy',
    //         isDog: false
    //     }
    // ];
// !! MINI EXERCISE 2 !!
// Getting a List of Object Keys as an array
    // console.log(Object.keys(pet4));
// Assigning Functionality to an Object
    // var pet4 = {
    //     name: "Pickles",
    //     age: 20,
    //     species: "horse",
    //     eat: function (food) {
    //         console.log("nom nom nom " + food);
    //     },
    //     gallop: function() {
    //         console.log("THUNK THUMP...THUNK THUMP!");
    //     }
    // };
    //
    // pet4.eat("carrots");
    // pet4.gallop();
// The this Keyword
    // var pet6 = {
    //     name: "Sparky",
    //     age: 3,
    //     getOlder: function() {
    //         console.log(this.age);
    //         this.age += 1;
    //     }
    // };
    //
    // console.log(pet6.age);
    // pet6.getOlder();
    // console.log(pet6.age);
// why use this vs. the object name: https://stackoverflow.com/questions/12799702/javascript-this-versus-object-name
// !! MINI EXERCISE 3 !!
    </script>
    </body>
    </html>