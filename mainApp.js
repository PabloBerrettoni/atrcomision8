//cargando dependencias
const express = require('express');
const bodyParser = require('body-parser');
const model = require('./models')
//const MySQL = require('./mysql/mysql')
//const mysql = new MySQL();

//inicio de la app
const app = express();
app.use(bodyParser.json());


//manejo de rutas
app.get('/', (req, res) => {
    res.send('Holanda desde express');
 });



/*
//credenciales de mysql
// nombre_db: usuarios_db
//  user: node_user
//  pass: comision8

//declaramos nuevo Estudiante
let usuarioNuevo = new model.Student()

//aplicamos los metodos incorporados en el objeto o clase
/* usuarioNuevo.setName('Brian')
usuarioNuevo.setUsername('BrianX340') */

//mostramos el usuario creado
console.log(usuarioNuevo)
