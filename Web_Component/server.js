var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get("/customElement.js", function(req, res){
    res.sendFile(__dirname + "/customElement.js");
})

app.get("/main", function(req, res){
    res.sendFile(__dirname + "/server.js");
})


var server = app.listen(3005);