// Se importan las librerías necesarias
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8000;

// Necesario para la recepción de info en formato JSON
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb'}));

// Ajustes en las cabeceras para no tener problemas en la recepción de request
app.use(function(req, res, next) {
  res.status(200);
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// API Rest

// /test para realizar prueba del funcionamiento del API
app.get('/test', function(req, res){
	console.log('La petición GET ha sido recibida con éxito :)')
	res.send('La petición GET ha sido recibida con éxito :)')
});

// /sendData para la recepción de info en POST
app.post('/sendData', function(req, res){
	var data = req.body
	console.log(data)
	res.send('Dato aceptado. De: El servidor :)') // Envia un mensaje al ciente
	//res.json(data) // Envía de nuevo al cliente la información que le llegó en el request
});

// Inicialización del server
http.createServer(app).listen(port);
console.log("Servidor Backend por el puerto " + port);