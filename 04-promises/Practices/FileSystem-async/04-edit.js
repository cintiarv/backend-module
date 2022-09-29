//4-. función que permita editar a un koder por su id y guardar el archivo con el cambio realizado

const fs = require('fs');

function updateKoderById(idKoder, newData){ //a que koder voy a actualizaor y que nueva data va a recibir 
    fs.promises.readFile('./koders.json', 'utf8') //este método ya me regresa la promesa, solo la tengo que manejar
                    .then((data)=>{
                        //aquí ya tengo la data del archivo
                        console.log(data); //me regresa un string 
                        const json = JSON.parse(data); //Convetir de str a objeto
                        console.log(json);

                        const koderFound = json.koders.find((koder) => koder.id === idKoder)
                        console.log(koderFound);

                        const koderUpdated = {...koderFound, ...newData} //del koder que encontraste añádele(se subescribe) la newData
                        console.log('koderUpdated', koderUpdated);

                        const newKodersToUpdate = json.koders.filter((koder) => koder.id !== idKoder)//reemplazaar el koder que esta en el arreglo por el nuevo koder
                        console.log('koders sin rafa: ', koders);

                        newKodersToUpdate.push(newKodersToUpdate)
                        json.koders = newKodersToUpdate
                        console.log('Koder actualizado');
                        console.log(json.koders);

                        fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2)) 
                            .then (() => {
                                console.log('Se actualizó el archivo');
                            })
                            .catch((err) => {
                                console.log('Error: ', err);
                            })

                    })
                    .catch((error)=>{
                        console.log('Error: ', error);
                    })

}

const newDataRafa = {
    name:'Rafael'
}

updateKoderById(2, newDataRafa)

//buscar índice de ese koder encontrado y utilizar splice

/* //spread operator
const objeto = {
    name:'cin',
    ln:'ruiz'
}

const otherObject = {
    age:26,
    github:'cin'
}
const newObject={...objeto, ...otherObject} funciona siempre yc uando este dentro de llaves 
console.log(newObject);
 */


