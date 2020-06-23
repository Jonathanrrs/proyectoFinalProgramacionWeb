const express = require('express');
const app = express();
const routes =  require('./src/routes');


const port = 3000;
app.use('/', routes);

//Mapear la carpeta publica a assets
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.listen(port, () => {
    console.log('Listening on port 3000');  
});
     