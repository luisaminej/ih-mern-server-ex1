const Vitamins = require('./../models/Vitamins')


exports.obtenerVitamins = async (req, res) => {

    try {
        const vitamins = await Vitamins.find({})

        res.json(vitamins)

    } catch (error) {

    }
}

exports.crearVitamins = async (req, res) => {

    const { nombre } = req.body

    try {
        const response = await Vitamins.create({ nombre })
        res.json(response)

    } catch (e) {

    }

}

exports.actualizarVitamins = async (req, res) => {

    const { vitaminsId, nombre } = req.body

    try {
        const response = await Vitamins.findByIdAndUpdate(vitaminsId, { nombre }, { new: true })

        // HASTA QUE NO EXISTA UN RES.JSON, SE VA A QUEDAR CARGANDO LA PANTALLA
        res.json(response)

    } catch (error) {

    }

}

exports.eliminarVitamins = async (req, res) => {

    const { vitaminsId } = req.body

    try {
        const response = await Vitamins.findOneAndRemove({_id: vitaminsId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}