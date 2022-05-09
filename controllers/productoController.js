const Producto = require("../models/Producto");

//fucniones para q no sea extenso el archivo de producto.js
exports.crearProducto = async (req, res) => {
    try {
        let producto;
        producto =  new Producto(req.body);

        //almacenar el producto
        await producto.save();
        //mensaje de exitoso
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

//funcion obtener
exports.obtenerProductos = async (req, res) =>{
    try {
        const productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');        
    }
}

//actualizar
exports.actualizarProducto = async (req, res) => {

    try {
        //extraer campos
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        //si el producto no existe
        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }


        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        //reemplzar datos
        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true} )
        res.json(producto); // producto con datos reemplazado
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//obtener un solo producto
exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//eliminar
exports.eliminarProducto = async (req, res) => {

    try {
        //primero busca y si no existe manda mensaje, si existe elimina
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id }) //findoneandremove elimina
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
