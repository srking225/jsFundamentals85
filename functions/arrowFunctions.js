/*
   1         2
let hit = () => {
    console.log('hi');
}

    1: We need to set the fat arrow function to a variable.
    2: We used th e'fat arrow' to signify its a function.

    --arrow functions (fat arrow functions) introduced in ES6
        --a more concise way to write functio expressions **not declarations**
        --arrow function does NOT get hoisted.

    --2 types of arrow functions:
        --Concise body
        --Block body
*/

// Concise Body

let hi = () => console.log('hi');
//concise body arrow functions return by default.
hi();

//BLOCK BODY
let hi = () => {
    console.log('hi');
}
//block body arrow functions must have a return in the body of the function (between the {})

let apples = x => console.log(`There are ${x} apples.`);
apples(10);

let bananas = (x,y) =>{
    console.log(`There are ${x} bananas`);
}
bananas(10);

//if no or multiple parameters are neeed - use ()
// do not need () if we ae only passing 1 parameter