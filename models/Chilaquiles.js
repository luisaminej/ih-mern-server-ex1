// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const ChilaquilesSchema = mongoose.Schema({
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

const Chilaquiles = mongoose.model('chilaquiles', ChilaquilesSchema)


// 4. EXPORTACIÓN
module.exports = Chilaquiles