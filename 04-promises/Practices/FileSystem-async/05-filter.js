//5-. función que permita obtener a los koders que sean mayores a 25 años
const fs = require('fs');

let koders = ()=>{
    fs.readFile('./koders.json', 'utf8', function (err, data){
        err 
        ? console.log(err) 
        : console.log(JSON.parse(data).koders)
        let kodersArray = JSON.parse(data).koders;
        let kodersFilter = kodersArray.filter((user)=>{ 
            return user.age > 25
        })
        let kodersFilterString = JSON.stringify(kodersFilter) //convierte a string para poder ponerlo como parámetro en la función write
        function write(){fs.writeFile('./koders.json', kodersFilterString, function(err){ 
            if (err){
                console.log(err);
            }else{
                console.log('Tus koders < 25 han sido eliminados de tu json')
            }
            });
        }
        write()
    })
}

koders()


