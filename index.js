var express = require('express')
var app = express()
var uuid = require('uuid')
var cors = require('cors')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Write page with text
app.get('/', (req, res) => {
  res.status(200);
  res.send("Hello World");
})

app.get('/uuid', (req, res) => {
  res.status(200)
  //return json obj for uuid
  res.json({"uuid":uuid.v4()})
})

app.listen(9000)