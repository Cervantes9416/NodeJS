const ctrl = {};
const {Image} = require('../models');

ctrl.index = async (req,res) =>{
    //Consulta para obtener imagenes
    const images = await Image.find().sort({
        timestamp:-1
    });
    res.render('index',{images})
};

module.exports = ctrl;
