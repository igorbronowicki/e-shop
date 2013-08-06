var db = require('./db');
var express = require('express');
var app = express();


// Routes

// Главная страница сайта
app.get('/', function(req, res) {
    res.send(200, 'Hello world!');
});

/*
 * Receive a list of all Products
 */
app.get('/admin/products.json', function(req, res) {
    var products = db.getProducts();
    res.json(200, products);
});


// такое...
app.listen(3000);
console.log('check 127.0.0.1:3000 out');