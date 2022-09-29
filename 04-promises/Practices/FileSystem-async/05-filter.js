//5-. función que permita obtener a los koders que sean mayores a 25 años
const fs = require('fs');

async function koders(file, age){
        const dataFile = await fs.promises.readFile(file, 'utf8') //este método ya me regresa la promesa, solo la tengo que manejar

        let kodersArray = JSON.parse(dataFile).koders;
        let kodersFilter = kodersArray.filter((user)=>{ 
            return user.age > age
        })
        
        await fs.promises.writeFile('./koders.json', JSON.stringify(kodersFilter, null, 2))  
        console.log(`Tus koders mayores a ${age}, han permanecido en tu json`);
    }

koders('./koders.json', 25)


