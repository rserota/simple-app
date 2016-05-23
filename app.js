var express = require('express')
var app = express()

app.get('/', function(req, res){
    console.log('someone visited the home page!')
    res.send('Welcome to the internet!')
})

app.listen(80)
