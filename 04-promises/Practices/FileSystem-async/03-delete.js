//3-. función que permita eliminar a un koder por su id y guardar el archivo con el cambio realizado

const fs = require('fs');

let koders = (id)=>{
    fs.readFile('./koders.json', 'utf8', function (err, data){
        err 
        ? console.log(err) 
        : console.log(JSON.parse(data).koders)
        let kodersArray = JSON.parse(data).koders;
        let kodersFilter = kodersArray.filter((user)=>{ //me filtra a los koders que no tengan el id-> 2
            return user.id !== id
        })
        let kodersFilterString = JSON.stringify(kodersFilter) //convierte a string para poder ponerlo como parámetro en la función write
        function write(){fs.writeFile('./koders.json', kodersFilterString, function(err){ 
            if (err){
                console.log(err);
            }else{
                console.log('Tu koder se ha eliminado de tu json')
            }
            });
        }
        write()
    })
}

koders(2)


