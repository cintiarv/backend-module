//1-. función que permita leer el archivo e imprimir en consola el arreglo de koders

const fs = require('fs');

async function readKoders(file){ //esta funciòn debe ser asìncrona ya que abajo utilizarè la promesa
    const dataFile = await fs.promises.readFile(file, 'utf8') //este método ya me regresa la promesa, solo la tengo que manejar
    const json = JSON.parse(dataFile); //Convetir de str a objeto
    console.log(json);                 
}                       
 
 readKoders('./koders.json')
