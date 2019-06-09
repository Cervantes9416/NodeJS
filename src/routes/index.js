const express = require('express');
const router = express.Router();

//CONTROLADORES
const home = require('../controllers/home');
const image = require('../controllers/image');

module.exports = app=>{
    //RUTAS HOME
    router.get('/',home.index);
    
    //RUTAS IMAGENES
    router.get('/images/:image_id',image.index);
    router.post('/images',image.create);
    router.post('/images/:img_id/like',image.like)
    router.post('/images/:img_id/comment', image.comment)
    router.delete('images/:img_id',image.delete);
    
    app.use(router);
}