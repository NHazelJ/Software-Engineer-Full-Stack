// Making Strings
let color = "purple";

let color = "purple";

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length; //5
// the lenght of the city above which was let city = 'tokyo'


//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'
// we are calling the index position on the word starting with 0


// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

let msg = "leave me alone right now i hate you plz"
msg.toUpperCase() //converting msg to all upper case

"LOLOLOLOLOL!!!!".toLowerCase() //Making LOL to lowercase lol


let userInput = "  hello my name is tim tom tammy ping pong"
userInput.trim() //removes all prior unnacessary spaces

let greeting = "   hello again"
greeting.trim().toUpperCase() //this will make both string methods actions to be applied


// String methods with arguments:
// ==============================
let tvShow = "catdog";
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)


//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string - slice with a number in parenthesis
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3
"pancake".slice(-1); // it will go backwards giving "e"


// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

msg = "haha that is so funny!"
msg.replace('haha', 'lololololol') // this will replace haha with lololololol
//input are called argument that we put inside the parenthesis

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// ========================
const color = "olive green";
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

`hello ${1+2+8}` //will say "hello 11"



let product = 'Artichoke';
let price = 3.99;
price = 2.25;
let qty = 5;

"You bought " + qty + " " + product + ".Total is: " + price * qty // This will say "You bought 5 Artichoke. Total is: 11.25"

//with string template literals will be 
`You bought ${qty} ${product}. Total is: $${price * qty}`

//Math Objects
Math
Math.PI
Math.E

Math.floor (23.99999) // round down 23
Math.ceil (34.01) // round up 35

Math.random () //will give us a random number from 0 to 0.99999999999999

//Random integers - we have to create it
const step1 = Math.random();
const step 2 = step1 *10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;

Math.floor (Math.random()*100)+1; // creating a random number from 0 to 99 as a whole




