//rutas para el producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api/productos, se mandan llamar las funciones que estan en la carpeta controllers
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);
module.exports = router;