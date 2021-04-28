/******
 * !FOR OF LOOPS
 * --Iterates over the values or an iterable object(strings and arrays inclued)
--iterable means to be able to parse through with numbers.
 ********/

//this does not work b/c the properties are not 'iterable'
let student = {
    name: 'Jake',
    awesome: true,  
    degree: 'insurance sales',
    age: 98
};

//for(item of student){
    //console.log(item);
//}

let soupArray =v['potato', 'brocoli', 'carrot', 'chicken noodle', 'chilli'];
for(soup of soupArray){
    console.log(soup);
}