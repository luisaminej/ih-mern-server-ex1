// 1. IMPORTACIONES
const express = require('express')
const router =  express.Router()

const chilaquilesController = require('./../controllers/chilaquilesController')


// 2. RUTEO
router.get('/', chilaquilesController.obtenerChilaquiles)


module.exports = router