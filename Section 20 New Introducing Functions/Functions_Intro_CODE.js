// Dice roles
// if you want to just create a function rollDie() to replace adding more dices
// let die1 = Math.floor(Math.random() * 6) + 1;

//===================================================

// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }
// singSong() You need this to call out the function
//=================================================

// function printHeart() {
//     console.log('<3')
// }
// printHeart()

//========================================================

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// Practice - Rant Exercise
// function rant(message){
//     aMessage = message.toUpperCase();
//     for (let i=0; i < 3; i++){
//         console.log(aMessage);
//     }
// }
// rant("I hate beets")


function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

//========================================================

//Exercise Multiple Args Exercise - isSnakeEyes

// function isSnakeEyes(num1, num2){
//     if (num1 === 1 && num2 === 1)
//         console.log('Snake Eyes!');
//     else 
//         console.log("Not Snake Eyes!");
// }

// isSnakeEyes(1,1);

//========================================================

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

//==============================================
// Return Value Practice
// function multiply(num1, num2){
//     return num1*num2;
// }

// multiply(2,3);
// multiply(9,9);
// multiply(5,4);

//=================================================
// isShortsWeather Function Exercise

function isShortsWeather(temperature) {
    if (temperature < 75) {
        return false;
    } else if (temperature >= 75) {
        return true;
    }
}

//=====================================================

// Last Element Exercise

function lastElement (LEArray) {
    if (LEArray && LEArray.length>0) {
        return LEArray[LEArray.length - 1];
    } return null;
}

//====================================================

Capitalize Exercise

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
console.log(capitalize('foo')); // Foo


//=====================================================

//Sum Array Exercise

function sumArray(array) {
    let total = 0;
        for (let value of array) {
        total += value;
    }
        return total;
  }

sumArray([1,2,3]) //6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101

//======================================================

// Days of the Week Exercise

//creating a object
const days = {
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
    7:"Sunday"
 }

const dayNum = Object.values(days);

function returnDay(day) {
    if(day < 1 || day > 7) {
        return null;
    } else {
        return dayNum[day - 1];
    }
}

