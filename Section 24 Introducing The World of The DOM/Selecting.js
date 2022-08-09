// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

//QuerySelector Practice

const doneTodos = document.querySelectorAll('.done');

const checkbox = document.querySelector('input[type="checkbox"]');

// Pickles Exercise

const ... = document.querySelectorAll('span')
 for(let link of allLinks){
    link.innerText = ' I AM A LINK!!!'
 }

 document.querySelector('span').innerText = 'Discusting';

 //==========================================================

 
const input = document.querySelector('input[type="text"]')

//============================================================
//Exercise Manipulating Attributes Practice

const imgChange = document.querySelector('img');

imgChange.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');

imgChange.setAttribute('alt','chicken');

//============================================================