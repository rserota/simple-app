var express = require('express')
var app = express()
var http = require('http')
var https = require('https')
var fs = require('fs')

app.get('/', function(req, res){
    console.log('someone visited the home page!')
    res.header('Strict-Transport-Security', 'maxAge=10886400000')
    res.send('Welcome to the internet!')
})
var httpServer = http.createServer(app)
httpServer.listen(80)

// HTTPS Setup //
try {

    var credentials = {
      key: fs.readFileSync('/etc/letsencrypt/live/thepasswordisdragons.com/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/thepasswordisdragons.com/cert.pem')
    };
    
    https.createServer(credentials, app).listen(443);
}
catch(error){
    console.log('HTTPS setup failed.')
    console.log('=-=-=-=-=-=-=-=-=-=-=')
    console.log(error)

}

