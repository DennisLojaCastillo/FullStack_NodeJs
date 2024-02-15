// hoisting 
// getRandomInt();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

//task write the above arrow function as a one-liner

// const getRandomIntArrowFunctionOneLiner = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

//stadig en One Liner
const getRandomIntArrowFunctionOneLiner = 
        (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

//console.log(getRandomInt(5,10));

// ----------------------------------------------------------------- //

                             //string  //callback function
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running`;

//write code below so that you can console log "Alex is running"

const runningResult = genericActionPerformer("Alex", running);
//console.log(runningResult);

// create a single line below that prints "Louis is eating"
console.log(genericActionPerformer("Louis", (name) => `${name} is eating`));














