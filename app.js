const express = require("express");
const quoteRoutes = require("./routes/quotes.route");

const app = express();

app.use("/quotes", quoteRoutes);

app.listen("3000");
