//4-. función que permita editar a un koder por su id y guardar el archivo con el cambio realizado

const fs = require('fs');

let koders = ()=>{
    fs.readFile('./koders.json', 'utf8', function (err, data){
        err 
        ? console.log(err) 
        : console.log(JSON.parse(data).koders)
        let kodersArray = JSON.parse(data).koders;
        kodersArray.map((x)=>{
            if(x.id == 2){
                x.id = 55
            }return 
        })
        let kodersIdModifyString = JSON.stringify(kodersArray) //convierte a string para poder ponerlo como parámetro en la función write
        
        function write(){fs.writeFile('./koders.json', kodersIdModifyString, function(err){ 
            if (err){
                console.log(err);
            }else{
                console.log('El id de tu koder ha sido modificado')
            }
            });
        }
        write()
    })
}

koders()






