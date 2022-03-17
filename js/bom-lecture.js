// hey = function(){
// 	console.log('hey');
// }
// //hey();



// var count = 0;
// hey = function() {
// 	console.log('hey ' + count);
// 	count = count + 1;
// }

//Solution with clear code
// var sayHey = function (){
// 	var count = 0;
// 	function hey(){
// 		console.log('hey ' + count);
// 		count = count + 1;
// 	}
// 	setInterval(hey, 100);
// }
// sayHey()

//this won't work; ti stops output but not make setInterval stop running
//var count = 0;
// function hey(){
// 	if(count <= 10){
// 		console.log('hey ' + count);
// 		count++;
// 	}
// }
// setInterval(hey, 100)

//this will work and make it stop;
// var count = 0;
// var makeItStop;
// function hey(){
// 	if(count <= 10){
// 		console.log('hey ' + count);
// 		count++;
// 	}else {
// 		clearInterval(makeItStop)
// 	}
// }
// makeItStop= setInterval(hey, 100)
function tenHeys(){
	var count = 0;

	var makeItStop = setInterval(function (){
// function hey(){
		if(count <= 10){
			console.log('hey ' + count);
			count++;
		}else {
			clearInterval(makeItStop)
		}
	}, 1000)

}
tenHeys()



