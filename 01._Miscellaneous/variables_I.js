// We will always default to using const
const myName = "Dennis";


const me  = {
};
me.name = myName;
console.log(me);


// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and thus also HAS to be assigned

const hobbies = ["coding","eating"];

hobbies.push("sleeping");

// hobbies = [];
// hobbies = "";

me.hobbies = hobbies;

// console.log(me);

// Types in JS: number, string, boolean, object, null, undefined, symbol, bigint (Represent big numbers "123123123n")

//Object: object, arrays, date

//type coercion 

// we ALWAYS use strict equality checks:
// === and !==

