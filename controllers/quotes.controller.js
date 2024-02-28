function getQuote(req, res, next) {
  res.json({
    quote: "Quotes....",
  });
}

module.exports = {
  getQuote: getQuote,
};
