const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

//==========================================================
//Magical Forest Circle Exercise


//#1 grab element with id of container
//#2 set text alignment to center
//#3 grab the image with js
//#4 set width to 150px
//#5 set border-radius to 50%


const container = document.querySelector('#container');
container.style.textAlign = 'center';

const img = document.querySelector('img');
img.style.width = "150px";
img.style.borderRadius = "50%";

//=============================================================

//Rainbow Text Exercise
//Solution 1:
const spans = document.querySelectorAll('h1 span');
 
 let i = 0;
 for(const span of spans){
     span.style.color = colors[i];
     i++;
 }

 //Solution 2:
 for (let i=0; i < spans.length; i++){
    spans[i].style.color = color[i]
 }

 //Solution 3:
 spans.forEach((span, index) =>{
    span.style.color = colors[index]
 })

 //============================================================
//Class list practice

const lis = document.querySelectorAll('li')

//solution 1:
for (let i = 0; i < lis.length; i++){
    if (lis[i].classList.contains('highlight')){
        list[i].classList.remove('highlight')
    } else {
        list[i].classList.add('highlight')
    }
}

//solution 2:
for (let i = 0; i < lis.length; i++){
    lis[i].classList.toggle('highlight')
}

//solution 3:
lis.forEach(li =>{
    li.classList.toggle('highlight')
})

//solution 4:
for (const li of lis){
    li.classList.toggle('highlight')
}




