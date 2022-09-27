//1-. función que permita leer el archivo e imprimir en consola el arreglo de koders

const fs = require('fs');

let koders = ()=>{
    fs.readFile('./koders.json', 'utf8', function (err, data){
        err 
        ? console.log(err) 
        : console.log(JSON.parse(data).koders)
    })
}

koders()



