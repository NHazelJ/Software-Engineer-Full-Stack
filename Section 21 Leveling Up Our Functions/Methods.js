const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}


//'This' how to use it

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

//====================================================

//Methods Exercies

const square = { 
    area (side) { 
        return side * side;
     }, 
     perimeter (side) { 
        return side * 4; 
    } 
};

//====================================================

// Egg Laying Exercise

const hen ={
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
    this.eggCount++; 
    return "EGG";   
    }
};

