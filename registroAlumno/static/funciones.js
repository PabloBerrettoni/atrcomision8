function cargarDb(){
    let fs = require('fs')
    let db = fs.readFileSync('./usuarios.json')
    console.log(db)
}

module.exports = { cargarDb }