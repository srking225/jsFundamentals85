/*
!loops
-offer us a quick and easy way to do something repeatedly, or loop over something
repeats until a specified condition returns false.

-A loop has 3 parts
    -Initial expression 
    -Condition
    -Increment expression
*/


// set i to 0 
// while i is less than 10
// i++ (add one)

for (let i = 0; i<10; i++){
    console.log(i);
}

for(let i = 0; i <= 20; i += 2){    //count to 20 in increments of 2 //
    console.log(i);
}

for(let t = 10; t >= 1; t--){      //count from 10 to 1 increments of 1//
    console.log(t);
}

//count down to -24 from 0 by 2s
for(let y = 0; y >= -24 ; y -= 2 ){
    console.log(y);
}

//go through a name and display each letter individually
let name1 = 'Isaiah';
for (let i = 0 ; i > name1.length; i++ ){
    console.log(name1[i]);
}


//MAKE A LOOP WHERE YOUU ADD UP ALL NUMBERS FROM 1 TO 50
let sum = 0;
for(let i = 1; i <= 50; i++){
    sum += i;
 }
  console.log(sum);


  for(let j = 0; j <= 10; j+=2){
      console.log(j);
  }

  let count = 0
  for( ; count < 9; ++count){
      console.log(count);
  }
