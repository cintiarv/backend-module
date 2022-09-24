const fs = require('fs');

fs.readFile('texto.txt', 'utf8', function (err, data){
    err ? console.log(err) : console.log(data)
})

//utf8-> codificación de caracteres