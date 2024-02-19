const express = require('express')
const app = express()
const routerApi = require('./routes')
const port =  3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})
//pp.get('/saludogio', (req, res) => {
//   const nombre= req.body.nombre
//   res.send("hola "+ nombre)
//})

app.get("/saludo/:nombre", (req , res) =>{
    const nombre = req.params.nombre
    res.send("su nombre es: " + nombre)

})



app.listen(port, () => {
    console.log("My port: " + port)
})

routerApi(app)