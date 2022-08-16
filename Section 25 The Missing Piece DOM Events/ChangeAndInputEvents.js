// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// // })

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value;
// })

//=======================================================
//Input Event Practice
// input.addEventListener('input',updateValue);
// bottom code is to check what the function is doing.
// input.addEventListener('input',(e) =>{
//     console.log(e.target.value);
// });
    
// function updateValue(e) {
//     log.textContent = e.target.value;
// }

const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(e) {
    if (input.value === ""){
        h1.innerText = 'Enter Your Username';
    } else {
        h1.innerText = `Welcome, ${input.value}`;
    }
});

    //h1.innerText = 'welcome, ' + e.target.value;    
    // h1.innterText = "Welcome, " + e.target.value;
