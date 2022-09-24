const fs = require('fs');

fs.appendFile('./texto.txt', ' Hola soy cin', (err) =>{
    err
    ?console.log(err)
    :console.log('Tu texto se añadió correctamente')
})

//agrega contenido a un archivo, si el archivo no existe lo crea y después agrega lo q le indiques