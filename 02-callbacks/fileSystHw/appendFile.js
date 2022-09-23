const fs = require('fs');

fs.appendFile('./texto.txt', ' Hola soy cin', (err) =>{
    err?console.log(err):console.log('Tu texto se añadió correctamente')
})