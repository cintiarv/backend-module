//3-. función que permita eliminar a un koder por su id y guardar el archivo con el cambio realizado

const fs = require('fs');

async function koders(file, id){
    const dataFile = await fs.promises.readFile(file, 'utf8') //este método ya me regresa la promesa, solo la tengo que manejar
    let kodersArray = JSON.parse(dataFile).koders;
    let kodersFilter = kodersArray.filter((user)=> user.id !== id)

    await fs.promises.writeFile('./koders.json', JSON.stringify(kodersFilter, null, 2)) //enre parent-> para darle formato 
    console.log(`El koder con id ${id} ha sido elimiando de tu json`)
}

koders('./koders.json', 2)


