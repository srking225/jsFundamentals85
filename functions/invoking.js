/* 
*/

function hi(){
    console.log('Hello');
}

hi();   // invoking turns the function on


console.log(hi);
console.log(hi());

//Create a function that, when invoked, lists out the numbeers 1-10

function counting(){    // function counting(){------return info ****needs to be invoked
   // let (num <= 10)
   for(i = 1; i <= 10; i++){
       console.log(i);
   }
}

counting();         //function is invoked