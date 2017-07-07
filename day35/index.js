const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/myproject';



MongoClient.connect(url, function(err, db) {
  console.log(err) 
  console.log("Connected correctly to server");
 
  db.close();
});


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.send('Hello!')
})
app.get('/demo', function (req, res) {
    req.body
  res.send('demo!')
})

app.post('/submit', function (req, res) {
    console.log(req.body)
    db.students.find({name:req.body.name}, function(err,data){
  res.send(data)

    })
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})