//scope is how the computer keeps track of all of our functions in a program

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;
function scope(){
    y = 33;
    console.log(y);
}

scopeTwo();
console.log(y);

