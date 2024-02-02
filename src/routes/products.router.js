const express = require('express')
const router = express.Router()


let misProductos = [
    {'Id': '1',
    'nombre': 'camisa',
    'precio': 1000,
    'color': 'negro'},
    {'Id':'2',
    'nombre': 'camisa ovesize',
    'precio': 1400,
    'color': 'blanco'},
    {'Id':'3',
    'nombre': 'pantalon',
    'precio': 2590,
    'color': 'beige'},]

router.get('/all', (req, res) => {
    res.send(misProductos)
})

router.post('/create', (req, res) => {
    const nuevoProducto = req.body
    console.log(nuevoProducto)
    misProductos.push(nuevoProducto)
    res.json({'Response': 'Created successfully',
    'Object': nuevoProducto,
    'finalArray': misProductos})
})

router.get ("/:productoId", (req, res) => {
    const productoId = req.params.productoId
    const productos = buscarProductoPorId(productoId)   
      console.log(productoId)
    if (productos){
     res.json(productos)
     console.log(productos)
     }
        else {
            res.status(404).json({'error': 'Producto no encontrado'});
         }
});
 const buscarProductoPorId = (productoId) => {
    misProductos.find(producto => producto.Id === productoId)
   };


module.exports = router