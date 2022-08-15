const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}


const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

//Know Thy Enemy Exercise
<body>
    <h1 onclick="console.log('boo')">Inline Events Suck...</h1>
    <button onclick='console.log("clicked")'  id=btn >Click Me</button>
</body>

//=====================================================================
//1. grab button with hello id
//2. grab button with goodbye id

const helloBtn = document.querySelector('#hello');
const goodbyeBtn = document.querySelector('#goodbye');

helloBtn.addEventListener('click', function(){
    console.log('hello');
});
goodbyeBtn.addEventListener('click', function(){
    console.log('goodbye');
});

//======================================================================