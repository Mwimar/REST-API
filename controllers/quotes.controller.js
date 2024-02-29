function getRandomQuote(req, res, next) {
  res.json({
    quote: "Quotes....",
  });
}

module.exports = {
  getRandomQuote: getRandomQuote,
};
