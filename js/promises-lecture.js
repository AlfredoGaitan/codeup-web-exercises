//2006-2015 AJAX with jQuery:
$.get('data/rows.json', function (result){
	console.log(result.data)});

//2015: ES6 and the fetch API/ Promises:

// fetch('data/rows.json').then (response => response.json()).then(info => console.log(info.data));
// console.log('did this happen after the call?');

//Callback- functions passed to other functions; so a funnction can call another function; a callback can run after another function has finished running

// function sayHello(greeting, name){
// 	return `${greeting}, ${name}!`;
//
// 	const salutation = sayHello('Mazel Tov', 'Jay');
//
// 	function displayPutput(output){
// 		document.getElementById('output').innerHTML = output;
//
// 	}
// 	sayHello('Mazo Tov', 'Jay');
// 	//displayPutput(salutation);
// }

// function myGreeter(greeting, name, outputFunction){
// 	const salutation = `${greeting}, ${name}!`;
// 	outputFunction(salutation);
// }
//  function displayInput(input){
// 	document.getElementById('output').innerHTML = input;
//  }
//  //myGreeter('mazel Tov', 'Jay', displayInput);
//
// //callbacks in async JS
//
// setTimeout(() =>myGreeter('aloha', 'Dane', displayInput), 2000);
//
// setTimeout(myGreeter, 2000, 'Yo', 'dude', displayInput);

//External resources:

// function getInfo(outputFunction){
// 	const request = $.get('data/rows.json', function (result){
// 		const infoToDisplay = result.data;
// 		outputFunction(infoToDisplay);
// 	});
// }
// //getInfo(displayInput);
// function displayVehicleInfo(info){
// 	let html = "";
// 	info.forEach((car, index) => {
// 		if (!car[12]||!car[9]||!car[14]||!car[13]) {
// 			html += '';
// 		} else {
// 			html += `<p>${index}:${car[12]} ${car[9]} ${car[14]}${car[13]}</p>`;
// 		}
// 	});
// 	$("#output").append(html);
// }
// getInfo(displayVehicleInfo);


//Promises-an object given a callback function

// const ourFirstPromise = new Promise((resolve, reject) =>{
// 	setTimeout(() => {
// 		if (Math.random() > 0.5){
// 			resolve('I am resolved');
// 		}else{
// 			reject('I was rejected :(');
// 		}
// 	}, 1000)
// });
//
// ourFirstPromise.then(value => console.log(value)).catch(error => console.log(error));

fetch('https://api.github.com/users')
	.then(response => response.json())
	.then(users => console.log(users))
	.catch(error => console.log(error));
