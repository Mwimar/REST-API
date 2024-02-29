const express = require("express");

const quoteControllers = require("../controllers/quotes.controller");
const router = express.Router();

router.get("/", quoteControllers.getRandomQuote);

module.exports = router;
