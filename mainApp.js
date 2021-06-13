




//inicio de la app

//cargando dependencias
const model = require('./models')


//declaramos nuevo Estudiante
let usuarioNuevo = new model.Student()

//aplicamos los metodos incorporados en el objeto o clase
/* usuarioNuevo.setName('Brian')
usuarioNuevo.setUsername('BrianX340') */

//mostramos el usuario creado
/* console.log(usuarioNuevo) */



usuarioNuevo.setName('brian')
usuarioNuevo.setLastName('rodriguez')

let newTeacher=new model.Teacher()
newTeacher.setName('jonatan')
newTeacher.setLastName('cespedes')

console.log(usuarioNuevo);
console.log(newTeacher);