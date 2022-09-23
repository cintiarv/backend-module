const fs = require('fs');

fs.writeFile('./texto.txt', 'Hola mundo', function(err){ //creare un archivo txt donde tntra el texto 'linea1'
    if (err){
        console.log(err);
    }else{
        console.log('archivo creado')
    }
    });