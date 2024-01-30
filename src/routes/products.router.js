const express = require('express')
const router = express.Router()

let misProductos = [
    {'nombre': 'camisa',
    'precio': 1000,
    'color': 'negro'},
    {'nombre': 'camisa ovesize',
    'precio': 1400,
    'color': 'blanco'},
    {'nombre': 'pantalon',
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

module.exports = router