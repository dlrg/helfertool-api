var express = require('express');
var model = require('./mysql.js');

var app = express();

console.log(model);

app.get('/', function (req, res) {
  let test = model.getProgramm();
  test.then((data) => {
    res.send(data);
  });
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

