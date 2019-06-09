const mongoose = require('mongoose');
var { database } = require('./keys')

mongoose.connect(database.URI, {useNewUrlParser:true})
.then(
    db => {
        console.log("DB is connect");
    }
).catch(
    err=>{
        console.log(err);
    }
);