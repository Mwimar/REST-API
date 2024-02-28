const express = require('express');

const app = express();

app.get('/quote', function (req, res, next) {
    res.json({
        quote:'As you dive deeper into development, you become an expert'
    });
});

app.listen('3000');