const path = require('path');
const {randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');

const {Image} = require('../models/index');

const ctrl = {}

ctrl.index = async (req,res)=>{
    //req.params.nombreVariable -> Obtiene el valor de la variable desde el url
    const image = await Image.findOne({filename:{$regex: req.params.image_id}});
    console.log(image)
    res.render('image',{image});
}

ctrl.create =  (req,res)=>{
    const saveImage = async () => {
        const imgUrl = randomNumber();
        const images = Image.find({
          filename: imgUrl
        })

        if (images.length > 0) {
            saveImage();
        } else {
            
            //OBTENER DATOS DE LA IMAGEN
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve('public/upload/' + imgUrl + ext);

            //VALIDA TIPO DE ARCHIVO
            if (ext === '.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif') {
                //En caso de que el archivo sea valido
                //Mueve el archivo de /public/updload/temp -> /public/upload
                await fs.rename(imageTempPath, targetPath);

                //Se crea el objeto que se guardara en la BD
                const newImg = new Image({
                    title: req.body.title,
                    filename: imgUrl + ext,
                    description: req.body.description
                });

                //Se guarda el objeto
                const imgSaved = await newImg.save();
                
                //Redirecciona la pagina a la siguiente url
                res.redirect('/images/'+imgUrl);
            
            } else {
                //En caso de que el archivo no sea valido
                await fs.unlink(imageTempPath);
                res.status(500).send({
                  error: "Solo imagenes permitidas",
                });
            } //else extenciones de los archivos
        }//else image.length
    }//saveImage

    //Ejecutar funcion (Recursion)
    saveImage();   
}

ctrl.like = (req,res)=>{
    
}

ctrl.comment  = (req,res)=>{
    
}

ctrl.delete  = (req,res)=>{
    
}

module.exports = ctrl;