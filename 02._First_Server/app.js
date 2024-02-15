// const express = require("express");
// const app = express();

const app = require("express")(); //- benytter ikke dette

//route
    // endpoint
        // callback function
        // request, response
app.get("/", (req, res) => {
    res.send({data: "welcome"});
});

app.get("/secondRoute", (req, res) => {
    res.send({data: [1, 2, 3, 4]});
});


// create a third route with the endpoint thirdRoute
// app.get("/thirdRoute", (req, res) => {
//     res.send("<h1>Hello motherfucker!</h1>");
// });

app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    console.log(firstValue, secondValue);
    console.log(req.params);
    res.send({data: "You reached the third route"});
});

// ----------------------------------------------------------------- //

/*
    Start with the balance of 100 in the wallet
    every time a client calls this route the value of paymentOut should be subtracted from the balance
    if the paymentOut creates a balance below 0 then tell the client "Sorry, not enough funds"
    */ 

/*
let balance = 100;
app.get("/wallet/:paymentOut", (req, res) => {
    const paymentOut = parseInt(req.params.paymentOut);
    const newBalance = balance - paymentOut;

    if(newBalance < 0) {
        res.send(`Sorry not enough funds! Your balance is ${balance}`)        
    } else {
        balance = newBalance;
        res.send(`Your balance is now ${newBalance}`);
    }
}); */

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    const withdrawalAmount = Number(req.params.withdrawalAmount);

    if(!withdrawalAmount) res.send({data: "You have submitted an incorrect amount, not a number"})

    if(balance - withdrawalAmount < 0) {
        res.send({ data: "Sorry, not enough funds." })
    } else {
        balance -= withdrawalAmount;

        res.send({data: `Your new balance is ${balance}`});
    }
});

app.get("/wallet/fillUpWallet/:amount", (req, res) => {
    const fillUpWallet = Number(req.params.amount);

    if(!fillUpWallet) res.send({data: "You have submitted an incorrect amount, not a number"})

    balance += fillUpWallet;
    res.send({data: `Your new balance is ${balance}`});
});


//task: create a task route called fillUpWallet that
//task: allows a client to fill up the wallet with a specified amount



// ----------------------------------------------------------------- //

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>")
});

// Well know ports // 
// Http: 80
// https: 443
// Http dev: 8080
// Https dev: 9090

app.listen(8080);

//console.log(app);

