//get access to button in the DOM
var button = document.querySelector('button');

//write event handler, aka event listener
function doThisWhenButtonIsClicked(){
	alert('You clicked me!');
}

//finally, register the handler
// button.addEventListener('click', doThisWhenButtonIsClicked);
//
// var secondButton = document.getElementsByTagName('button')[1];
//
// secondButton.onclick = doThisWhenButtonIsClicked;

// var allTheButtons = document.getElementsByTagName('button');
// for(var i = 0; i < allTheButtons.length; i++){
// 	allTheButtons[i].addEventListener('click', doThisWhenButtonIsClicked);
// }

//Use html and css to create a square with a background on an html page.
//Register an event handler and write its code such that when you click the square, it alerts that it's a square and its color.

var redSquare = document.querySelector('.square');
function doThisWhenredSquareisClicked(){
	alert('I am a red square');
}
redSquare.addEventListener('click', doThisWhenredSquareisClicked);
