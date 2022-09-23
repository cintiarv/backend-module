
import fs from 'fs'
fs.writeFile('koder-1.txt', 'Hola koders', (error) =>{
    if(error){
        console.log('Error: ', error)
        return
    }
    console.log('Se ha creado el archivo ')
})