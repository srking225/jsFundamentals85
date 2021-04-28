/**
 * Switch statements execute a block of code depending on different cases.
 * 
 * _often used together with a break or default keyword (both optional)
 *     -- break: breaks out of the switch block. (stops execution of code)
 *      --default: specifies some code to run if there is no case match.(only one default keyword in a swtich)
 */

let officeCharacter = "Pam";

switch(officeCharacter){
    case "Micheal":
        console.log('My mind is going a mile an hour');
        break;
        case "Dwight":
            console.log("Perfect fiction teller");
            break;
            case "Jim":
                console.log ('Bears. Beets. Battlestar Galactica');
                break;
                default:
                    console.log(officeCharacter);
}

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/