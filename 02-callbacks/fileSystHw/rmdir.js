const fs = require('fs');


fs.rmdir('..//fileExample', (err) =>{
    err?console.log('Ha ocurrido un error'):console.log('Tu carpeta ha sido eliminada')
})


//ELiminar una carpeta ./ en misma carpeta ..// capreta anterior