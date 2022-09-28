
const fs = require('fs');
let salida = '';
function tabla(base){
    for(let i = 1 ; i <= 10 ; i++){
        let salida = base*i;
        console.log(salida)
    }
    
}
tabla(4);
fs.writeFile('tabla.txt', salida, (err) => {
    err
    ?console.log(err)
    :console.log('El archivo con tu tabla ha sido creado');
})


module.exports = {
    tabla
}