// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const add = (a, b) => a + b;


// const square = num => {
//     return num * num;
// }


//=============================================================
// Arrow Function Exercise

const greet = (name) => {
    return `Hey ${name}!`;
  };
   
  console.log(greet("Hagrid")); //"Hey Hagrid!"
  console.log(greet("Luna")); //"Hey Luna!"

//==============================================================

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//Implicit return - we need to use parenthesis
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => a + b




const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))





