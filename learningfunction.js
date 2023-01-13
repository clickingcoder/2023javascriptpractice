// This file is notes for learning Function with JS course on Udemy 
'use strict';

/* //Function Declearation

function calcAge1(birthYear) {
    const age = 2037 - birthYear
    return age;
}

const age1 = calcAge1(1987);
console.log(age1)
//We also have another type of function in JS which will be showed bellow.


}
const age2 = calcAge2(1986)


console.log(age1, age2)
// In this case, calcAge2 is a gunction as well.
 */

// Function Expression
/* const calcAge2 = function (birthYear) {
    return 2037 - birthYear */

// Arrow Function
/* const calcAge3 = birthYear => 2023 - birthYear;

const age3 = calcAge3(1987);
console.log(age3)

const yearUntilRetirement = birthYear => {
    const age = 2023 - birthYear
    const retirement = 65 - age;
    return retirement;
}
console.log(yearUntilRetirement(1987)); */

/* const mySalary = wageMin => wageMin * 160 // The function structure is a => expression. Expression is going after arrow that why this called arrow function.
console.log(mySalary(Number(prompt("Input Age")))) */


//Function calling other functions.

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function peopleEat(people) {
    return people * 2
}

function fruitProcessor(apples, oranges, numberofPeople) {
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const peopleEatFruit = peopleEat(numberofPeople)

    const juice = `There are ${applesPieces} apples and ${orangesPieces} oranges and we have ${peopleEatFruit} people.`
    return juice;
}

console.log(fruitProcessor(2, 3, 5))
 */

//REVIEW FUNCTION

/* const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
// birthYear here is local variabe for each function and can be use twice. They are competely different in value. 

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired ${retirement} years`)
        return -1;
    }
}
console.log(yearUntilRetirement(1987, 'Hieu'));
console.log(yearUntilRetirement(1920, 'Nam')); */
