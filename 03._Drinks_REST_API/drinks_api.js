const express = require("express");
const app = express();

// Midlertidig test database
let drinks = [
  { id: 1, name: "Pina Colada", type: "Cocktail" },
  { id: 2, name: "Dark N stormy", type: "Cocktail" },
  { id: 3, name: "Pepsi Max", type: "Soft Drink" },
  { id: 4, name: "Moutain Dew", type: "Soft Drink" }
];

// Forside
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the drinks library</h1>");
});


// Henter alle drinks
app.get("/drinks", (req, res) => {
  res.send({ data: drinks });
});

// Henter en specifik drink med ID
app.get("/drinks/:id", (req, res) => {
  const id = req.params.id; // Fjernet destruktueringens klamme parenteser rundt om 'id'
  const drink = drinks.find((id) => d.id === parseInt(id));
  if (!drink) {
    return res.status(404).send({ data: "Drink doesn't exist" });
  }

  res.send({ data: drink });
});

app.listen(8080);
