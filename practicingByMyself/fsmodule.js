const fs = require('fs'); //módulo filesystem

fs.writeFile('./texto.txt', 'línea 1', function(err){ //creare un archivo txt donde tntra el texto 'linea1'
if (err){
    console.log(err);
}else{
    console.log('archivo creado')
}
});

console.log('ult línea de código')

fs.readFile('./texto.txt', function(err,data){ //lee el código e imprime lo q hay dentro de el 
    if (err) {
        console.log(err)
    }else{
        console.log(data.toString());
    }
})