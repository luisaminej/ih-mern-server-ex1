const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
        process.exit(1) // DETIENE LA APP POR COMPLETO CUANDO QUIEREN ATACAR
    }
}

module.exports = connectDB