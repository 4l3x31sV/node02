var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app  =express();


app.set('view engine', 'pug')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
    //res.send("Hola Mundo");
    res.render('index', {titulo:"Hola alexeis", saludo: "Bienvenido Alexeis"})
    //console.log(req)
})

app.get("/saludo", function(req,res){
    res.send("Bienvenidos");
})
app.get("/:nombre/:apellido", function(req,res){
    res.render("saludo", {nombre:req.params.nombre, apellido:req.params.apellido})
    //res.send("Bienvenido " + req.params.nombre + 
    //                    " " + req.params.apellido)
})
app.listen(8080)