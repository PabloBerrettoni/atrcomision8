//npm init                      con esto creamos el directorio del servidor
//npm install express           instalamos el modulo express, que es el motor del servidor
//npm install body-parser       instalamos el modulo body-parser, que procesa el mensaje que envia el usuario como json
//node run app.js

const express = require('express') //Arrancamos el motor de express
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 5000
const router = express.Router()

app.get('/registro',(request,response)=>{
    response.sendFile(__dirname + '/static/templates/index.html');
})

app.get('/inicio',(request,response)=>{
    response.send('Bienvenido a comision 8!')
})


app.post('/crearUsuario', (request, response) => {
    if (crearUsuario(request.body)){
        response.send({ 'STATUS':'OK' })
    } else {
        response.send({ 'STATUS':'FAIL' })
    }
 });

function crearUsuario(usuario){
    let fs = require('fs')
    let db = JSON.parse(fs.readFileSync('db_user.json'))
    db.push(usuario)
    fs.writeFileSync('db_user.json',JSON.stringify(db),'utf-8')
    return true
}


// Archivos estaticos
app.use(express.static('static'));
app.use('/css', express.static(__dirname + 'static/css'));
app.use('/js', express.static(__dirname + 'static/js'));
app.use('/img', express.static(__dirname + 'static/img'));

// Seteando views
//app.set('views', './views');
//app.set('view engine', 'ejs');



app.listen(port, () => console.info(`App listening on port localhost:${port}`))


module.exports = app