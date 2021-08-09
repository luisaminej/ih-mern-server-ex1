// 1. IMPORTACIONES
const express = require('express')
const router =  express.Router()

const vitaminsController = require('./../controllers/vitaminsController')


// 2. RUTEO

// OBTENCIÓN DE TODOS LOS PROYECTOS
router.get('/', vitaminsController.obtenerVitamins)

// CREAR UN PROYECTO NUEVO
router.post('/crear', vitaminsController.crearVitamins)

// ACTUALIZAR UN PROYECTO
router.post('/actualizar', vitaminsController.actualizarVitamins)

//BORRAR PROYECTO

router.post('/eliminar', vitaminsController.eliminarVitamins)

 
module.exports = router