const express = require('express')
const app = express()
const routerApi = require('./routes')
const port =  3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log("My port: " + port)
})

routerApi(app)