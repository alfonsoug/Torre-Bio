const express = require('express');
const app = express();
const morgan = require('morgan');

//required routes
const routes = require('./routes');
const api = require('./api');
//settings
app.set('appName','TorreBio');
app.set('views', __dirname+'/views')
app.set('view engine','ejs');

//middelwares
app.use(morgan('dev'));

//routes
app.use(routes);
app.use('/api',api);

app.get('/*', (req,res)=>{
    res.end('archivo no encontrado');
});


app.listen(3000, ()=>{
    console.log('Servidor iniciado');
    console.log('Application: ', app.get('appName'));
});