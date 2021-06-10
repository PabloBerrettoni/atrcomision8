let fs = require('fs');

module.exports = moduloFunciones = {
    leerJSON : () => {
        let listaDeProductos = fs.readFileSync('./productos.json', 'utf-8');
        return JSON.parse(listaDeProductos)
    },
    escribirJSON: (producto, marca, precio, stock, descripcion, categoria) => {
        let nuevoProducto = {
            Producto : producto,
            Marca : marca,
            Precio : precio,
            Stock : stock,
            Descripcion : descripcion,
            Categoria : categoria,
            Codigo : this.codigoUnico()
        }
        let listaAnterior = moduloFunciones.leerJSON();

        listaAnterior.push(nuevoProducto);
        moduloFunciones.guardarJSON(listaAnterior)
    },
    guardarJSON: (info) =>{
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./productos.json', nuevoJSON, 'utf-8')
    },
    deshacer: () => {
        let productos = moduloFunciones.leerJSON()
        productos.pop();
        moduloFunciones.guardarJSON(productos);
    },
    filtrarPorCategoria: (categoria) => {
        let listaDeProductos = moduloFunciones.leerJSON()
        let productosFiltrados = listaDeProductos.filter(producto => {
            return producto.categoria.toLowerCase() === categoria.toLowerCase();
        })
        return productosFiltrados
    },
    codigoUnico : () => {
        let misCodigos = moduloFunciones.leerJSON()
        let codigo = Math.floor(Math.random()*(1 + 9999))
        for (let i = 0; i < misCodigos.length; i++) {
            if(misCodigos[i].codigo === codigo){
               return this.codigoUnico()
            }
            return codigo;
        }

    },
    filtrarPorCodigo : (codigo, cantidad) => {
        let listaA = moduloFunciones.leerJSON();
        let productos = listaA.filter(producto => {
            return producto.Codigo === codigo;
        })


        if(productos){
            productos.forEach(producto => {

              producto.Stock = parseInt(producto.Stock) + cantidad; 
                
            });
        }
        
        moduloFunciones.guardarJSON(listaA)
        
    }

}

//console.log(moduloFunciones.filtrarPorEstado("terminado"));

console.log(moduloFunciones.filtrarPorCodigo(4409, 3));