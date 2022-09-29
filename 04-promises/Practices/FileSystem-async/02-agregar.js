//2-. función que permita agregar un koder al arreglo de koders y guardar el archivo con el cambio realizado

const fs = require('fs');

async function addKoder(file,newKoder){ 
    const dataFile = await fs.promises.readFile(file, 'utf8') //este método ya me regresa la promesa, solo la tengo que manejar
    let kodersArray = JSON.parse(dataFile).koders; //Convetir de str a objeto y entrar al array 'koders'
    console.log(kodersArray);
    
    kodersArray.push(newKoder) //solo se puede dar push a un arreglo de objetos por eso tuvimos que acceder al arreglo koders antes de darle push 
    console.log(kodersArray);
    
    await fs.promises.writeFile('./koders.json', JSON.stringify(kodersArray, null, 2)) //enre parent para darle formato 
    
}                       
 

function createKoder(id, name, lastName, age){
    let array={
    id:name.length,
    name:name,
    lastName:lastName,
    age:age
} 
return array
}


addKoder('./koders.json', createKoder(0,'Cin', 'Ruiz', 25))
