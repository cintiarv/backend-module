const fs = require('fs');

fs.copyFile('./texto.txt', './copyText.txt', err =>{
    err?console.log('Ha ocurrido un error'):console.log('Tu archivo ha sido copiado correctamente')
})