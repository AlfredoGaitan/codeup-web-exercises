// break and continue Ex.
// var string = "";
// for(var i = 0; i  < 8; i++) {
//     var word = prompt('Let\'s make a sentence!');
//     if (word === 'curses') {
//         console.log('This is a respectable program!');
//         break
//         //continue;
//     }
//     string = string + " " + word;
//     console.log(string);
// }

// var oddNum = 1; oddNum <=51; oddNum++{
//     var num = prompt('Pick a number');
//         if(num % 3 === 0){
//           console.log(num + ' is an odd number');
//     }else{
//          console.log('This is an invalid number!');
//          break;
//     }
//         oddNum = oddNum;
//     console.log(oddNum);
// }
while(true){
    var userNum = prompt('Pick an odd number between 1 and 50');
    if(userNum % 2 === 1 && userNum <=50 && userNum >=1){
        break;
    }
}
console.log('Skip number: ' + userNum);
//for (var i = 1; i <=50; i+=2){
    for (var i = 1; i <=50; i++){
        if(i % 2 ===0)
            //if(i == userNum){
            console.log('Yikes! Skipping number: ' + userNum);
        continue;
    }
//}
    console.log(i);

