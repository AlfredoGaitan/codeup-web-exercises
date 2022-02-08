// Ex. #5
for(var count = 100; count >=5; count = count -5){
    console.log(count);
}

//Ex. #2
var showMultiplicationTable = 7;
for (var i = 1; i <=10; i++){
    var result = showMultiplicationTable * i;
    console.log(showMultiplicationTable + ' * ' + i + ' = ' + result);
}

//Ex. #3
 var number = Math.floor(Math.random() * (200 - 20 +1) +20);
 for(var i = 1; i <=10; i++){
     var number = Math.floor(Math.random() * (200 - 20 +1) +20);
     if(number % 2 === 0){
         console.log(number + ' is even');
    }else{
        console.log(number + ' is odd');
    }
 }

//Ex #4
for(var i =1; i <=9; i++){
    console.log(i.toString().repeat(i))
}

// var repeatNum = [11,22,333,4444,55555,666666,7777777,88888888,999999999, ]
// for( i= 0; i < repeatNum.length; i++ ){
//     console.log(repeatNum[i])
// }






