const fs = require('fs');

fs.mkdir('..//fileExample', err => {
    err?console.log('Ha ocurrido un error'):console.log('Tu carpeta se ha creado correctamente')
});
