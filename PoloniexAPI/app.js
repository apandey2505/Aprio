var express = require('express');
var app = express();



let {
  getDataFromPoloniex
} = require('../aprio_getDataFromApi/controller/getDataFromPoloniex')


app.get('/', function (req, res) {
  getDataFromPoloniex;
  res.send('we are on first page');
});
app.listen(3000, function () {});
