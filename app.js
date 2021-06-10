let moduleTask=require('./tareas')   //requerimos los modulos creados en otro archivo en este caso tareas.js
let process=require('process');  //requerimos un objeto con sus distintos metodos

let action = process.argv[2]        //le asignamos a una variable la posicion numero 2 empezando contando desde 0
if(action !== undefined){   //condicionamos que si la variable recibe algun dato continue con el switch 
switch(action.toLowerCase()){    //el switch recibe los datos en minuscula
    case "listar":   //si action es igual a estos string va a ejecutar un bloque de codigo
    case "list":    
    case "ls":
    case "lista":
        moduleTask.toListForConsole(moduleTask.getJsonToScript())  //llamamos a los modulos creados del objeto moduleTask para listar el contenido del archivo JSON
    break;
    case "add":         //si action es igual a estos string va a ejecutar un bloque de codigo
    case "agregar":
    case "ingresar":
    case "crear":

        let titlePosition = process.argv[3]          //asignamos variables a las distintas posiciones
        let statePosition = process.argv[4]
        let archiveArr = moduleTask.getJsonToScript()       //metemos en la variable el array obtenido por el metodo colocado
        let archiveCreater = moduleTask.buildTask(titlePosition,statePosition)  // metemos en la variable el elemento que construimos desde consola en las dos posiciones definidas al principio del case.
        let write =()=> moduleTask.writeJson(archiveCreater,archiveArr)  //llamamos al metodo que nos reescribe los datos ya obtubidos mas el nuevo ingresado  
          if(titlePosition===undefined){             //si titulo es indefinido va a ejecutar un bloque de codigo
            /* win.windowStateUnde() */
            moduleTask.win.windowStateUnde()
          }else{
             write()
            
           
            if(statePosition==undefined){  //condicion si el dato ingresado por consola es indefinido
                moduleTask.win.windowTaskAdd(archiveCreater)  //ejecutamos la funcion declarada arriba
            }else{
                let intoLowerCaseAdd = statePosition.toLowerCase() 
                //creamos una variable que recibe los datos en minuscula de la posicion en consola que pertenece al estado del objeto

                if (intoLowerCaseAdd.includes("term")) { 
                    // condicionamos que si en la posicion en consola incluye el string entre los parentesis                   
                    archiveCreater.estado="terminada"    
                    //asignamos al valor de la propiedad estado el string definido
                    moduleTask.win.windowTaskAdd(archiveCreater)
                    write()  //llamamos al metodo que nos reescribe los datos ya obtubidos mas el nuevo ingresado 
 
                    //funcion de ventana ejecutada,imprime por consola los datos del objeto agregado
                }else if(intoLowerCaseAdd.includes("pend")){  
                    // condicionamos que si en la posicion en consola incluye el string entre los parentesis
                    archiveCreater.estado = "pendiente" 
                    //asignamos al valor de la propiedad estado el string definido
                    moduleTask.win.windowTaskAdd(archiveCreater)
                    //funcion de ventana ejecutada,imprime por consola los datos del objeto agregado
                    write()  //llamamos al metodo que nos reescribe los datos ya obtubidos mas el nuevo ingresado 

                }else if(intoLowerCaseAdd.includes("en pr")||intoLowerCaseAdd.includes("proc")){ 
                    // lo mismo que anteriormente                     
                  archiveCreater.estado="en proceso"  
                  //asignamos al valor de la propiedad estado el string definido
                  moduleTask.win.windowTaskAdd(archiveCreater)
                  //funcion de ventana ejecutada,imprime por consola los datos del objeto agregado
                  write()  //llamamos al metodo que nos reescribe los datos ya obtubidos mas el nuevo ingresado 

                }else{
                   moduleTask.win.windowStateValid() //ejecutamos funcion window creada
                }
            }
        }
    break;
    case "filter":      //si action es igual a estos string va a ejecutar un bloque de codigo
    case "filtrar":
    case "buscar":
        let positionFilter = process.argv[3]   // designamos en una variable la posicion 3 en consola
        
        if(positionFilter==undefined){
                moduleTask.win.windowStateValid()                
            }else{
                let intoLowerCase = positionFilter.toLowerCase()                
                //creamos una variable que recibe los datos en minuscula de la posicion en consola que pertenece al estado del objeto

                    if (intoLowerCase.includes("term")) { 
                        // condicionamos que si en la posicion en consola incluye el string entre los parentesis
                        intoLowerCase = "terminada"  
                        // el dato que ingresemos en la posicion establecida sera igual a "terminada"
                    }else if(intoLowerCase.includes("pen")){  
                        // condicionamos que si en la posicion en consola incluye el string entre los parentesis
                        intoLowerCase = "pendiente"        
                        // el dato que ingresemos en la posicion establecida sera igual a "pendiente"
                    }else if(intoLowerCase.includes("en pro")||intoLowerCase.includes("proc")){ // lo mismo que anteriormente
                        intoLowerCase = "en proceso"     //asignamos como anteriormente 
                    }else{
                       moduleTask.win.windowStateValid() //ejecutamos el metodo de win 
                    }
                moduleTask.filterForState(intoLowerCase)    //llamamos el metodo del objeto moduleTask y le argumentamos lo que ingresa por consola en la posicion 3
            }
           // usamos el objeto con el metodo creado que nos filtra por el estado que le coloquemos como parametro,en este caso sera el dato que ingrese por consola en la posicion 3
    break;
    case "deshacer":
    case "atras":
    case "undo":
           moduleTask.deshacer()
                 
    break;           
    default:
        console.log(" ---------------------------------\n | No entiendo qué quieres hacer |\n ---------------------------------")       //imprimimos por consola en caso que se escriba mal sobre la posicion de consola donde va la accion a realizar.   
    }
}else{
    console.log(" --------------------------------------------\n | Atención - Tienes que colocar una acción | \n --------------------------------------------")  //imprimimos por consola si la accion en la posicion sobre consola numero 2 es indefinida (undefined)
}
