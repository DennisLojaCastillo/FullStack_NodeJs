const express = require("express");

const app = express();

app.use(express.static("public"));

// const heliopterFactory = require("./util/helicopterFactory");
// console.log(heliopterFactoryFile.heliopterFactory);

const { heliopterFactory } = require("./util/helicopterFactory");
// console.log(heliopterFactoryFile.heliopterFactory);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
  res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

const knownNames = ["Anders", "Alice"];

app.get("/greeting", (req, res) => {
  const providedName = req.params.name;
  if (knownNames.includes(providedName)) {
    res.send({ data: `Hello ${providedName}!` });
  } else {
    res.send({ data: "Hello stranger!" });
  }
});

app.get("/knownpeople", (req, res) => {
  res.send({ data: knownNames.length });
});

app.get("/proxy", (req, res) => {
  fetch("https:/www.google.com")
    .then((response) => response.text())
    .then((data) => res.send(data));

  /* Assignment: Request the https://www.google.com home page and serve it as a response */
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
