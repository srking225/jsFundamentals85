/**
 *! FOR IN LOOPS
 -great for iterating over values in a n object
 -properties in objects are what's called enumerable (countable)
 -enumerable just means 'countable'
 */

let student = {
    name: 'Jake',
    awesome: true,  
    degree: 'insurance sales',
    age: 98
};

for(item in student){
    console.log(item);
    console.log(student[item]);
};