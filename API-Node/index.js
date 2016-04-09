var express = require('express');

var app = express();

app.get('/', function(req,res) {
  res.send('Test 1,2');
});

var server = app.listen(3000, function () {
  console.log('server started.');
});
