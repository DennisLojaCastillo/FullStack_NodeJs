"use strict";  //- definer i toppen af filen eller funktioner

// __totalGlobalVariable = "Never EVER!!!! do this!!!";

// var globalVariable =  "Also NEVER ever do this!!!";

// use const whenever possible, else use let

// about const: 
// const cannot be undecleared or redeclared
// but its value can be changed as long as you don't change the assignment

//console.log(__totalGlobalVariable);

// ----------------------------------------------------------------- //

// ----------- Scope types ----------- //

// global scope

function someOtherScope() {
    // function scope
}


{
    // <-- Block scope
    //console.log("What is this?");
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    //console.log(someValue); // var holder sig ikke til sit scope og derfor bliver det false - det poluter det globale scope
}

{
    let someValue = true;
    {
        let someValue = false;
    }
    // console.log(someValue); // lexically scope
}

// ----------------------------------------------------------------- //

for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


