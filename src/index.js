const express = require("express")
const app = express()
const routerApi = require("./routes")
const port =  3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello word")
})


app.get("/mensaje", (req, res) => {
    const nombre = req.body.nombre
    res.send("hola "+ nombre)
})


app.listen(port, () => {
    console.log("My port: " + port)
})

routerApi(app)