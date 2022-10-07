const {tabla} = require ('./index')

const base = 4

tabla(base)
    .then(nombreArchivo => console.log(nombreArchivo, creado))
    .catch(err => console.log(err);)