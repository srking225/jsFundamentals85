// place holders for data we want to pass

            //  1
function hi(userName){
    console.log(`Hi, ${userName}.`);        //place holder must be given a value to initalize
                    //  2

}

//  3
hi("Summer");

/* 
    1: The parameter(s) that the function accepting or holding.
    2: Using string interpolation, we can refer to the parameter given to the function.
    3: This is where we define what the parameter's value will be.
*/
hi('Adam');
let myUser = "Brittany"; 
hi(myUser);

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/



function hello(first, last) {
    let myName = first + " " + last;
    console.log("Hello, my name is " + (myName));
}

hello("Mechia" , "King")