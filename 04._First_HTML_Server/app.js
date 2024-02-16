const express = require("express");

const app = express();

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

//Assignment: Create a new route with the endpoint publicsquare that serves publicSquare.html

app.get("/publicsquare", (rq, res) => {
  res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
