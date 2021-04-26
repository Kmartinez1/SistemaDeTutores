const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('bienvenidos a nuestra api'))
app.listen(port, () => console.log(`el puerto donde esta corriendo la api` + " " + " : " + port ))