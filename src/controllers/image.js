const path = require('path');

const ctrl = {}

ctrl.index = (req,res)=>{
    res.send('Image page');
}

ctrl.create = (req,res)=>{
    const ext = path.extname(req.file.originalname).toLowerCase();
    const imageTempPath = req.file.path;
    const targetPath = path.resolve('src/public/upload/test$(ext)')

    res.send("WORKS!!!");
}

ctrl.like = (req,res)=>{
    
}

ctrl.comment  = (req,res)=>{
    
}

ctrl.delete  = (req,res)=>{
    
}

module.exports = ctrl;