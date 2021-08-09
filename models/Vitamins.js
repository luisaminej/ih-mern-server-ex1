// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const VitaminsSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

// 3. MODELO

const Vitamins = mongoose.model('Vitamins', VitaminsSchema)


// 4. EXPORTACIÓN
module.exports = Vitamins