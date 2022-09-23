const fs = require('fs'); // fs es un módulo q ya existe 

fs.writeFile('koders.t', 'Hola koders desde fs de node', (error) =>{
    if(error){
        console.log('Ocurrió un error: ', error)
        return
    }
    console.log('Se ha creado el archivo ')
})