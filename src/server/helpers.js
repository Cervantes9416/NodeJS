//moment
const moment = require('moment');

//objeto helper
const helper = {}

//Metodos
//Estos metodos pueden utilizarse con handlebars en las vistas
helper.timeago = timestamp =>{
    return moment(timestamp).startOf('minute').fromNow();
};

module.exports = helper;