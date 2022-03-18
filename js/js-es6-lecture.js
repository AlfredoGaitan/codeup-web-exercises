//if var is used in a code block, variable is global:
// {
// 	var name = 'Alfredo';
// }
// console.log(name);

//using let inside a code block, scope of variable is local:
// {
// 	let otherName = 'Felipe';
// }
// console.log(otherName);

//Uncaught reference error, variable(firstName) is out of scope:
// while(true){
// 	let firstName = 'Alfredo';
// 	break;
// }
// console.log(firstName);

//generates zayzay due to declaration inside code block has local scope and doesn't override global variable:
// let name = 'zayzay';
// if(true){let name = 'Isaiah';}
// console.log(name);


//generates Isaiah due to the variable inside the code block has global scope:
// var name = 'zayzay';
// if(true){var name = 'Isaiah';}
// console.log(name);

// function scopeTester(){
// 	firstName = 'isaiah';
// 	var anotherName = 'patrick';
// 	let brothersName = 'luis';
// }
// scopeTester();
// //uncaught ref error, functions don't work the same way
// // console.log(anotherName);
// // console.log(brothersName);
// console.log(firstName);

// let alfredosName = 'alfredo';
// let job = 'developer';
// let place = 'texas';
//
// //let theBigStringInHTML = <p> + alfredosName + '<span>' + job + '</span> in'  + place + '</p>';
//
// 	let theBigStringInHTML = '<p>${alfredosName} is a <span>${job}</span> in ${place}.</p>';
//
// 	document.getElementById('output').innerHTML = theBigStringInHTML

//Object destructuring

// const car = {
// 	make: "Toyota",
// 	model: "Tacoma",
// 	year: 2019,
// 	mileage: 12657
// }
//
// let make = car.make;
// 	let model = car.model;
// 	let year = car.year;
// 	let mileage = car.mileage;


//can reassign values of object properties even if the properties inside is a const:
// car.mileage = 12648;
// car.color = 'red';
//
// const {make, model, year, mileage} = car;
//
// 	let carDescription = '<p>I see a ${year} ${make} ${model} with ${mileage} miles.</p>';
//
// 	outputDiv.innerHTML += carDescription;
//
// 	const myFlyTrucks = [car, car2];
// 	for(let i = 0; i < myFlyTrucks.length; i++){
// 		const {make, model, year, mileage}
// 	}

	//can't do this
//car = {}

//Arrow Functions:

//func declaration
// function add(num1, num2){
// 		return num1 + num2;
// }

//fun expression
// const ass = function (num1, num2){
// 	return num1 + num2;
// }

// const add = (num1, num2) => num1 + num2;
//
// const add10 = num => num + 10;
//
// const helloWorld = () => 'Hello World';
//
// const outputCar = ({make,model, year, mielage, owner: {firstName, lastName}, color} = car) => 'I see a ${color} ${year} ${make} ${model} with ${mileage} miles owned by ${firstName}.'

//for....of loop:
//iterate over data types that are iterable objects--strings, arrays, and nodeLists(the kind of sort-of-array that gets returned by DOM methods like getElementByTageName)

// const instructors = ['javier', 'Justin', 'Jay', 'david'];
// for(const name of instructors){
// 	console.log(${name} 'teaches at Codeup');
// }

for(let letter of 'Codeup'){
	if (letter === 'd'){letter = letter.toUpperCase();}
	console.log(letter);
}

