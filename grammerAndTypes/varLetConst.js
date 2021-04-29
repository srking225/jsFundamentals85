// VAR (VS) LET
/* 
Introduce in ES6, we have 3 keyword variables:
    -var
    -let
    -const

var (&) let: operate the same but behave differently
const: cannot be re-expressed. 

    -var is scoped to the nearest function block
    -let is scoped to the nearest enclosing block.
*/

//* VAR
var x = 12

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

//*********************************
//  =LET

let x = 12;

function varTest() {
    let x = 33;
    if (1 == 1) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);


//* *******************
//  CONST
//*************

function constTest(){
    const scope = 1;

    if(true){
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();