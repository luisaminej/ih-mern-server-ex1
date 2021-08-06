// 1 IMPORTACIONES

const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

// 2 MIDDLEWARES

// VARIABLES DE ENTORNO
require('dotenv').config()

// CONEXIÓN A DB
connectDB()

// Habilitar CORS
app.use(cors())


// 3 RUTEO

// API
app.use('/api/proyectos', require('./routes/proyectos'))
app.use('/api/chilaquiles', require('./routes/chilaquiles'))


// MONITOREO (PARA VER QUE SÍ FUNCIONE)
app.get("/", (req, res) => {
    res.send("Hola mundo")
})






// 4 SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Conectados al servidor en el puerto ${process.env.PORT}`)
})