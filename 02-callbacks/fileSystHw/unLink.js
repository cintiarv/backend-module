const fs = require('fs');

fs.unlink('./prueba.txt', (err) =>{
    err?console.log('Ha ocurrido un error'):console.log('tu archivo ha sido eliminado')
})



//Asynchronously removes a file or symbolic link. No arguments other than a possible exception are given to the completion callback.