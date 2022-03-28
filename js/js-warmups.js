"use strict";

//Write a function that takes in an input and returns the string "I have no idea what you just said"

// function warmUps(str){
//     return 'I have no idea what you just said';
// }
// console.log(warmUps('hello'))
// console.log(warmUps('10'))

//write a function that takes in a Number and returns the number times 2
//so if you give it 2, it returns 4
//if you give it 100 it returns 200

// function aNumber(num){
//     return  num * 2;
// }
// console.log(aNumber(2))
// console.log(aNumber(6))

//write a function that takes in a number and returns that number plus itself
// function randomNumber(num){
//     return num + num;
// }
// //console.log(6)
// //console.log(3)
//
// //now write a function that takes in 2 numbers, doubles each number, then returns the sum of both numbers doubles
// function twoNumbers(num1, num2){
//     return (num1 * 2) + (num2 * 2);
// }
// //console.log(4,6)
//
// //write a function that takes in a number and squares it(that is, returns that number multiplied by itself)
// function squaredNumber(num){
//     return (num * num);
// }
//
// //write a function that takes in a string and return its length
// function aStringLength(str){
//     return str.length
// }
// // console.log(str)
//
// //write a function that takers in 2 strings and returns the sum of their lengths
// function twoStrings(str1, str2){
//     return str1.length + str2.length;
// }
// //
// // console.log()
//
// //write a function that takes in a number and returns the string 'even or 'odd' depending whether the number is even or odd
// function oddOrEven(num){
//     if(num % 2 === 0){
//         return 'even';
//     }else{
//         return 'odd'
//     }
// }

// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
//removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// function removeBsFromString(str){
//     return str.replaceAll('b', '').replaceAll('B', '');
// }
// function removeBs(arr){
//     var output = [];
//     arr.forEach(function (str){
//         output.push(removeBsFromString(str));
//     });
//     return output;
// }

// function removeBs(arr){
//     return arr.join(',')
//         .replaceAll('b', '').replaceAll('B', '')
//             .split(', ')
// }
//
// console.log(removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]);

// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// // ‘User jbomb is an admin and can be reached at john@email.com’
// // If jbomb were not an admin, the message should display...
// // ‘User jbomb is not an admin and can be reached at john@email.com’
//
// var user = {
//     username:'jbomb',
//     email: 'john@email.com',
//     isAdmin: true
// };
//
// function createUserMsg(user){
//     // if (user.isAdmin){
//     //     return 'User ' + user.name + ' is an admin and can be reached at ' + user.email;
//     // }else {
//     //     return 'User ' + user.name + ' is not an admin and can be reached at ' + user.email;
//     // }
//     return 'User ' + user.username + ' is' + ((user.isAdmin) ? '' : 'not') + 'an admin and can be reached at ' + user.email;
//     // username: 'jbomb',
//     // email: ‘john@email.com’,
//     // isAdmin: true
//
// }
// console.log(createUserMsg(user))

// function areaOrPerimeter(l,w){
//     if(isNaN(parseFloat(l)) || isNaN(parseFloat(w))){
//         return false;
//     }    if (l === w){
//        return l * w;
//     } else{
//         return (l * 2) + (w * 2);
//    }
// }
// const areaOrPerimeter = function (l, w){
//     if (l === w){
//         return l * w;
//     } else{
//         return (l * 2) + (w * 2);
//     }
// };

// function sumOfStrings(numString1, numString2){
//     if(isNaN(parseFloat(numString1)) || isNaN(parseFloat(numString2))){
//         return false;
//     }   else{
//         return (parseFloat(numString1) + parseFloat(numString2)).toString();
//
//     }
// }

// In a new HTML file in `codeup-web-exercises`, add a script to solve the following problem...
// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//     Assume the following shape of the user object for the function input:
//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }
// //The shape of the output should be the following:
// {
//     firstName: '...',
//         lastName: '...',
// }
//Regardless of the case of the first name and last name input, the output should be in all lower case.
// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}

// var John = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@email.com',
//     username: 'john123',
//     password: 'passwd123'
// }
//
// function getSimpleUser(user){
//         return{
//             firstName: user.firstName.toLowerCase(),
//             lastName: user.lastName.toLowerCase()
//         }
// }
//
// console.log(getSimpleUser(John))

//var person = {
//     firstName: 'Alfredo',
//     lastName: 'Gaitan',
// };
// console.log(person)
// console.log(person.firstName);

//================================= WARM UP

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.

//var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
//var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

// function createNames(arr1, arr2){
//     var output = []
//     var length = arr1.length
//     for( var i =0; i < length; i+= 1){
//         output.push({
//             firstNames: arr1[i],
//             lastNames: arr2[i]
//         });
//     }
//     return output;
// }
// var firstNames =['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calicio'];
// console.log(createNames(firstNames, lastNames));

    // [
    // {
    //     firstName: 'CJ',
    //     lastName: 'Cat'
    // },
    //     {
    //         firstName: 'Max',
    //         lastName: 'Feline'
    //     },
    //     {
    //         firstName: 'Claude',
    //         lastName: 'Kitten'
    //     },
    //     {
    //         firstName: 'Meowmeow',
    //         lastName: 'Calico'
    //     }
    // ]

// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

// function remainder(int1,int2){
//     if (isNaN(parseFloat(int1)) || isNaN(parseFloat(int2))){
//     if(int1>int2){
//         return int1 % int2;
//     }
//     return int2 % int1
// }
// }

// function printer_error(str){
//     var totalOverM = 0;
//     for(var i in str){
//         if(str[i] > 'm'){totalOverM++}
//     }
//     return '' + totalOverM + '/' + str.length;
// }

// function isLochNessMonster(s){
//     //find the LochNess monster. save your tree-fiddy!
//     return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
// }

//Create a function that accepts an object with 2 properties, parcelNum and weight & returns the weight
// function parcelWeight(object){
//     return object.weight;
// }
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//
// console.log(parcelWeight(parcel));


// parcelWeight ({
//     parcelNumber: 1,
//     weight: 20
// })
//output: 20

// function totalWeight(arrayOfObjects){
//     var total = 0;
//     for(var i =0; i < arrayOfObjects.length; i++){
//         total += arrayOfObjects[i].weight
//     }
//     return total;
// }
// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];
// console.log(totalWeight(parcels))

// function outputParcelInfo(parcelsArray){
//     var outputDiv = document.getElementById('parcelInfo');
//     var total = 0;
//     var html = '<table><tr><th>Parcel Number</th></t><th></th>Weight</th>';
//     for(i = 0; i < parcelsArray.length; i++){
//         total += parcelsArray[i].weight;
//         html += ''<tr><td>'+ parcelsArray[i].number + '</td></td>'>;
//     }
//     html += '<tr><td>Total:</td><td>' + total + ''</td></table>';
//         outputDiv.innerHTML = html;
// }
// outputParcelInfo(parcels)

//DOM warmup
//create a heading that says 'Good Morning!'
//create a button that says 'Press if after 12pm'
//When button is pressed, 'Good Morning' changes to 'Good Afternoon'

// var theButton = document.querySelector('button');
//
// function changeHeader(){
//     document.querySelector('h1').innerText = 'Good Afternoon';
// }
//
// theButton.addEventListener('click', changeHeader);

//================================= JS WARM UP

//Consider the following array of users:

    // var users = [
    //     {
    //         username: 'fsmith',
    //         email: 'fsmith@email.com',
    //         numberOfLogins: 23
    //     },
    //     {
    //         username: 'ksmith',
    //         email: 'ksmith@email.com',
    //         numberOfLogins: 100
    //     },
    //     {
    //         username: 'lsmith',
    //         email: 'lsmith@email.com',
    //         numberOfLogins: 10
    //     }
    // ];

// Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.

// returnFirstUser(users) should return...
//
// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
//}

// function returnFirstUser(users){
//      return users[0]
// }
//     console.log(returnFirstUser(users))
    //{
    //     username: 'fsmith',
    //     email: 'fsmith@email.com',
    //     numberOfLogins: 23
    // }



// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133
//
// function returnTotalUserLogins(users){
//     var total = 0;
//     for(var i =0; i < users.length; i++){
//         total += users[i].numberOfLogins;
//     }
//     return total;
// }
// console.log(returnTotalUserLogins(users))

//forEach example resolution:
// user.forEach(function (user)){
//     total += user.numberOfLogins;
// });
// return total;
// }
// console.log(returnTotalUserLogins(users));

// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }
// function returnMostFrequentUser(users){
//     var mostFrequentUser = users[0];
//     users.forEach(function(user) {
//        if(user.numberOfLogins > mostFrequentUser.numberOfLogins){
//            mostFrequentUser = user;
//        }
//     });
//     return mostFrequentUser;
// }
// console.log(returnMostFrequentUser(users))

// ================================= WARM UP
//
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:

// {
// 	operation: 'subtract' (or 'multiply' or 'add'),
// 	integer: 7 (or any positive or negative integer)
// }

// Example 1...
//
// var operations1 = [
//
// 	{
// 		operation: 'add',
// 		integer: 7
// 	},
// 	{
// 		operation: 'add',
// 		integer: 3
// 	}
// ]
//
//
// //computeOperations(operations1, 10) // returns 20
// //
// //
// // Example 2...
// //
// var operations2 = [
//
// 	{
// 		operation: 'add',
// 		integer: 7
// 	},
// 	{
// 		operation: 'add',
// 		integer: 3
// 	},
// 	{
// 		operation: 'multiply',
// 		integer: 3
// 	},
// ]
//
// //computeOperations(operations2, 10) // returns 60
//
//
// //Example 3...
//
// var operations3 = [
//
// 	{
// 		operation: 'subtract',
// 		integer: 5
// 	},
// 	{
// 		operation: 'multiply',
// 		integer: -2
// 	},
// 	{
// 		operation: 'add',
// 		integer: 10
// 	},
// ]
//
// //computeOperations(operations3, 10) // returns 0
//
// /////forEach loop resolution version//////////
// function computeOperations(operators, startingNum) {
// 	//create a total var that we'll change with iteration of loop
// 	var total = startingNum;
// 	//loop through each operation and console log each number
// 	operators.forEach(function (operator) {
// 		if(operator.operation === 'add'){
// 			total += operator.integer;
// 		}else if (operator.operation === 'subtract') {
// 			total += operator.integer;
// 		}else if (operator.operation === 'multiply'){
// 					total += operator.integer
// 				}
//
//
//
// 		// console.log(operator.integer);
// 		// console.log(operator.operation)
// 	});
// 	//based on op val, can +,-, * current integer to the total var
// 	//return total var
// 	return total;
//
// }
// console.log(computeOperations(operations1, 10), 20);
// console.log(computeOperations(operations2, 10), 60);
// console.log(computeOperations(operations3, 10), 0);
//
//
// var operations1 = [
// 	{
// 		operation: 'add',
// 		integer: 7
// 	},
// 	{
// 		operation: 'add',
// 		integer: 3
// 	}
// ];
//
// var operations2 = [
// 	{
// 		operation: 'add',
// 		integer: 7
// 	},
// 	{
// 		operation: 'add',
// 		integer: 3
// 	},
// 	{
// 		operation: 'multiply',
// 		integer: 3
// 	},
// ];
//
// var operations3 = [
// 	{
// 		operation: 'subtract',
// 		integer: 5
// 	},
// 	{
// 		operation: 'multiply',
// 		integer: -2
// 	},
// 	{
// 		operation: 'add',
// 		integer: 10
// 	}
// ]
// /////for loop resolution to the above problem//////
// function computeOperations(operators, startingNum) {
// 	// create a total variable that we'll change with each iteration of loop
// 	var total = startingNum;
//
// 	// loop through each operation and console log each number
// 	for(var i =0; i < operators.length; i += 1){
// 	// operators.forEach(function(operator) {
// 		if (operators[i].operation === 'add') {
// 			total += operators[i].integer;
// 		} else if (operators[i].operation === 'subtract') {
// 			total -= operators[i].integer;
// 		} else if (operators[i].operation === 'multiply') {
// 			total *= operators[i].integer;
// 		}
//
// 	}
// 	// based on the operation value, we can add/subtract/multiple the current integer to the total variable
// 	// return total variable
// 	return total;
// }
//
//
// console.log(computeOperations(operations1, 10), 20);
// console.log(computeOperations(operations2, 10), 60);
// console.log(computeOperations(operations3, 10), 0);

// ================================= WARM UP
//
// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:
// function addTwos(arr){
// 	var sum = 0;
// 	arr.forEach(function (num){
// 		sum += (num === 2) ? num : 0;
// 	});
// 	return sum;
// }
// 	var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];
//
// console.log(addTwos(nums1), 2)   // returns 2
// console.log(addTwos(nums2), 4)   // returns 4
// console.log(addTwos(nums3), 0)   // returns 0
// console.log(addTwos(nums4), 8) // returns 8
// console.log(addTwos(nums5),10) // returns 10

// ================================= WARM UP
//
// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
// 	Examples...



 // returns...
//
// {
// 		stringValue: 'hello',
// 		stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
// 	stringValue: 'codeup',
// 		stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }
//
// function returnStringObject(str){
// 	return{
// 		stringValue: str,
// 		stringArray: str.split('')
// 	}
// }
//
// console.log(returnStringObject('hello'))

// ================================= JS WARM UP
//  Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.

// function countNegatives(nums){
// 	var negativesCount = 0
// 	num.forEach(function (num){
// 		if(num < 0){
// 			negativeCount++;
// 		}
// 	});
// 	return negativesCount
//
//
//
// console.log(countNegatives(nums1))
// console.log(countNegatives(nums2))
// console.log(countNegatives(nums3))
// console.log(countNegatives(nums4))
// var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
// var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
// var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
// var nums4 = [-3, -10]; // countNegatives(nums4) returns 2

// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.
//
// 	Example...

//
// function createFirstNamesArray(arr){
// var firstNames = []
// for (var i = 0; i < arr.length;i++){
// 	firstNames += arr[i].firstName + ','
// }
// return firstNames.split(',')
// }
//
// var users = [
// 	{
// 		firstName: 'Bob',
// 		lastName: 'Smith',
// 		email: 'bob@email.com'
// 	},
// 	{
// 		firstName: 'Sally',
// 		lastName: 'Smith',
// 		email: 'sally@email.com'
// 	},
// 	{
// 		firstName: 'Fred',
// 		lastName: 'Smith',
// 		email: 'fred@email.com'
// 	},
// 	{
// 		firstName: 'Cathy',
// 		lastName: 'Smith',
// 		email: 'cathy@email.com'
// 	},
// 	{
// 		firstName: 'Joe',
// 		lastName: 'Smith',
// 		email: 'joe@email.com'
// 	},
// ];
//
// console.log(createFirstNamesArray(users));
// //createFirstNamesArray(users); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']

//Assessment problems that I missed in 2nd JS exam:

// function remove9s(nums) {
// 	//create an output array
// 	var output = []
// 	//loop thru the input array and add non-nines to the output array
// 	//return the output array
// 	nums.forEach(function(num) {
// 		if (num === 9) {
// 			//do nothing
// 		} else {
// 			output.push(num);
// 		}
// 	})
// 	return output
// }


//Justin solution
// function averageSales(salesPeople){
// 	var totalSales = [];
// 	salesPeople.forEach(function(salesPerson){
// 		totalSales.push(salesPerson.sales);
// 	});
// 	return average(totalSales);
// }
// //Chris solution
// function averageSales(arr){
// 	var sum = 0;
// 	var total = 0;
// 	for (var i = 0; i < arr.length; i++){
// 		sum += arr[i].sales;
// 		total ++
// 	}
// 	return sum / total;
// }
// //Justin Solution
// function convertNameToObject(name){
// 	var namesArray = name.split(' ')
// 	return{
// 		firstName: namesArray[0],
// 		lastName: namesArray[1]
// 	};
// }
//
// function analyzeWord(str){
// 	return {
// 		word: str,
// 		numberOfLetters: str.length,
// 		numberOfVowels: countVowels(str)//countVowels was used since this function was created previously in the exam
// 	};
// }
//
// function capitalizeName(name){
// 	//name.split(' ')[o] & name>split(' ')[1]--use this in place of nameObject to run this problem and remove var
//
// 	//var nameObject = convertNameToObject(name)
// 	return nameObject.firstName.charAt(0).toUpperCase() + nameObject.firstName.substring(1)
// 		+ ' '
// 		+ nameObject.lastName.charAt(0).toUpperCase() + nameObject.lastName.substring(1);
//
// }


//DOM warm-up, changing color of box on click button(2 ways to do it, .getElementById or .querySelector(must add # to selector, #changeColor)
//var changeColorButton = document.getElementById('changeColor');
// var changeColorButton = document.querySelector('#changeColor');
// changeColorButton.addEventListener('click', function (){
// 	document.getElementById('square').style.backgroundColor = 'red';
// })
// //this function is to reset back to original color when clicked
// document.getElementById('reset').addEventListener('click', function (){
// 	location.reload()
// })

//DOM warm-up. hover over to change color then back to original color when out of it:
//vanilla JS
document.querySelectorAll('.square').forEach(function (element){
	element.addEventListener('mouseenter', function (){
		const targetColor = event.target.dataset.color;
		//console.log(targetColor);
		event.target.style.backgroundColor = targetColor;
	});
	element.addEventListener('mouseleave', function (){
		event.target.style.backgroundColor = '';
	})
});

//jquery method:

// $('.square').hover(function (){
// 	console.log($(this).attr('data-color'));
// 	const $targetColor = $(this).attr('data-color');
// 	$(this).css('background-color', $targetColor);
// }, function (){
// 	$(this).css('background-color', '');
// });


//DOM warmup: change colors to yellow when clicked and then back to white when clicked again:

//jquery solution:
// $('#changingColors .square').on('click', function (){$(this).toggleClass('yellow')}
// );

//Vanilla JS solution:
// const changingColorsSquares = document.querySelectorAll('#changingColors.square');
//
// function toggleColor(e){
// 	!e.target.style.backgroundColor ? e.target.style.backgroundColor = 'yellow' : e.target.style.backgroundColor = '';
// }
//
// changingColorsSquares.forEach(square => square.addEventListener('click', toggleColor));

