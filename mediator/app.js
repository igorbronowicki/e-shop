var express = require('express');
var app = express();


// Routes

// Главная страница сайта
app.get('/', function(req, res) {
    res.send(200, 'Hello world!');
});


// такое...
app.listen(3000);
console.log('check 127.0.0.1:3000 out');