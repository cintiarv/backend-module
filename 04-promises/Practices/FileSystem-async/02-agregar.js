//2-. función que permita agregar un koder al arreglo de koders y guardar el archivo con el cambio realizado

const fs = require('fs');
let koders = ()=>{
    fs.readFile('./koders.json', 'utf8', function (err, data){
        err 
        ? console.log(err) 
        : console.log(JSON.parse(data).koders)
        let kodersArray = JSON.parse(data).koders;
        console.log(kodersArray)
        kodersArray.push(newKoder)
        console.log(kodersArray)
        let newArrayString = JSON.stringify(kodersArray)
        function write(){fs.writeFile('./koders.json', newArrayString, function(err){ 
            if (err){
                console.log(err);
            }else{
                console.log('Tu koder se ha unido a tu json')
            }
            });
        }
        write()
    })
}

koders()

function createKoder(id, name, lastName, age){
    let arreglo={
    id:name.length,
    name:name,
    lastName:lastName,
    age:age
} 
return arreglo 
}

let newKoder = createKoder(0,'Cin', 'Ruiz', 25)
