// Properties are qualities associated with datatypes.
/**String Properties
 * String properties have only one property and that is the length property
 */

let myName ="Mechia";
console.log(myName.length);
//  .length gives the lenght of the property in string **including space**

/** String Methods
 - Tools used the manipulate data.
 difference between property and method, methods have () at the end** .method()  vs .property
 -functions associated with datatypes.
 */

console.log(myName.toUpperCase());
// .toUpperCase() will capitalize all letters.

let home = "My home is Indiana";
console.log(home.includes('Indiana'));
// .include() will  check if a certain string is included in another string

let sent = 'this sentence will be split into individual pieces';
console.log(sent.split(' '));