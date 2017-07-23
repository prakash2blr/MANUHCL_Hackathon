var express = require('express');
var bodyParser=require('body-parser');
var http= require('http');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":false}));

var fs=require('fs');
app.use(express.static(__dirname+'/'));

app.listen(8081);
