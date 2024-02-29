const express = require("express");
const quoteRoutes = require("./routes/quotes.route");
const db = require("./data/database");

const app = express();

app.use("/quotes", quoteRoutes);

db.initDb()
  .then(function () {
    app.listen("3000");
  })
  .catch(function (error) {
    console.log("Error Connecting to database!");
  });
