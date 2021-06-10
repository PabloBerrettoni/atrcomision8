let fs = require('fs');

module.exports = modulesFunctions = {
    readJSON :() =>JSON.parse(fs.readFileSync('./productos.json', 'utf-8')),

    writeJSON: (producto, marca, precio, stock, descripcion, categoria) => {
        let nuevoProducto = {
            producto : producto,
            marca : marca,
            precio : Number(precio),
            stock : Number(stock),
            descripcion : descripcion,
            categoria : categoria.toLowerCase(),
            codigo : modulesFunctions.codeOnly()
        }
        let listaAnterior = modulesFunctions.readJSON();
        listaAnterior.push(nuevoProducto);
        modulesFunctions.saveJSON(listaAnterior)
    },
    saveJSON: (info) =>fs.writeFileSync('./productos.json', JSON.stringify(info), 'utf-8'),
    
    deshacer: () => {
        let productos = modulesFunctions.readJSON()
        productos.pop();
        modulesFunctions.saveJSON(productos);
    },
    filterForCategory: (cate) => {
        let listaDeProductos = modulesFunctions.readJSON()        
        let filtrados = listaDeProductos.filter(producto =>producto.categoria === cate)
        filtrados.forEach(element =>console.log('\n' + element.descripcion ))        
    },
    codeOnly : () => {
        let misCodigos = modulesFunctions.readJSON()
        const codigo = Math.floor(Math.random()*(1 + 9999))
            misCodigos.forEach(element =>{
                return element.codigo===codigo?codigo:""
            })
            return codigo
    },
    filterForCode : (codigo) => {
        let listaA = modulesFunctions.readJSON();
        let productos = listaA.filter(producto =>producto.codigo === Number(codigo))
        let elementosFiltrados = productos.forEach(element =>console.log(`\nProducto : - ${element.producto} \nDescripcion : - ${element.descripcion} \nCodigo: ${element.codigo} \nStock: ${element.stock} \nPrecio : $${element.precio}`))          
    }
}

