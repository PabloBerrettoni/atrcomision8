let modulesFunctions = require('./funciones');
let process = require('process');
let comando = process.argv[2];

if(comando!=undefined){
    switch (comando.toLowerCase()) {
        case 'listar':
        case 'list':
        case 'ls':    
            let productos = modulesFunctions.readJSON();
            productos.length !== 0?productos.forEach(producto=>console.log(`Marca: ${producto.marca} \nDescripcion: ${producto.descripcion} \nPrecio: $${producto.precio} \n`)):console.log();('Tu lista de productos está vacía')
            break;
        case "agregar":
        case "add":        
            let producto = process.argv[3]; 
            let marca = process.argv[4]; 
            let precio = process.argv[5]; 
            let stock = process.argv[6]; 
            let descripcion = process.argv[7]; 
            let categoria = process.argv[8]; 
    
            modulesFunctions.writeJSON(producto, marca, precio, stock, descripcion, categoria)
            break;
        case "deshacer":
        case "atras":    
            modulesFunctions.deshacer()
            break;
        case "filtrar":
        case "filter":        
            let filtrar = process.argv[3]
            let item = process.argv[4]
            if(filtrar!=undefined){
                filtrar=="categoria"?modulesFunctions.filterForCategory(item):filtrar=="codigo"?modulesFunctions.filterForCode(item):console.log("Escribe bien lo que quieres filtrar genix !!!")              
            }else{
                console.log('No ingresastes lo que quieres filtrar')
            }
            break
        default:
            console.log('No entiendo lo que quieres hacer');
            break;
    }
} else{
    console.log('Atención - Tienes que pasar una acción.');
}
