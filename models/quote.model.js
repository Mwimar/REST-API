const db = require("../data/database");

class Quote {
  static async getRandomQuote() {
    const quotes = db.getDb.collection("quotes").find().toArray();
    const randomQuote = Math.floor(Math.random() * quotes.length);
    return randomQuote;
  }
}

module.exports = Quote;
