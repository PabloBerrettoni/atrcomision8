let moduloProductos = require('./funciones.js');
let process = require('process');
let comando = process.argv[2];

if(comando){
    switch (comando.toLowerCase()) {
        case 'listar':
            let productos = moduloProductos.leerJSON();
            if(productos.length === 0){
                console.log('Tu lista de productos está vacía');
            }else{
                for(let i = 0; i < productos.length ; i++ ){
                    console.log(productos[i]);
                }
            }
            break;
        case "agregar":
            let producto = process.argv[3]; 
            let marca = process.argv[4]; 
            let precio = process.argv[5]; 
            let stock = process.argv[6]; 
            let descripcion = process.argv[7]; 
            let categoria = process.argv[8]; 
    
            moduloProductos.escribirJSON(producto, marca, precio, stock, descripcion, categoria)
            break;
        case "deshacer":
            moduloProductos.deshacer()
            break;
        case "filtrar":
            let filtrar = process.argv[3];
            let productosFiltrados = moduloProductos.filtrarPorCategoria(filtrar);
            for(let i = 0; i < productosFiltrados.length; i++){
                console.log(productosFiltrados[i].titulo);
            }
    
            break;
        case undefined :
            console.log('Atención - Tienes que pasar una acción.');
            break;
        default:
            console.log('No entiendo lo que quieres hacer');
            break;
    }
} else{
    console.log('Atención - Tienes que pasar una acción.');
}
