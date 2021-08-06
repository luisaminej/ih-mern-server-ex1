const Chilaquiles = require('./../models/Chilaquiles')


exports.obtenerChilaquiles = async (req, res) => {
    
    try {
        const chilaquiles = await Chilaquiles.find({})

        console.log(chilaquiles)

        res.json(chilaquiles)

    } catch (error) {
        
    }


    
}