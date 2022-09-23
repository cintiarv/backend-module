//valores truthy
const cadena = 'hola';
const cualquierNum = 34;
const objeto = {};
const arreglo = [];

console.log('cadena: ', Boolean(cadena))
console.log('num: ', Boolean(cualquierNum))
console.log('obj: ', Boolean(objeto))
console.log('arregl: ', Boolean(arreglo))

//valores falsy 
const cadenaVacia = '';
const cero = 0;
const valorNull = null;
const valorIndefinido = undefined;

console.log('Cadena vacía: ',Boolean(cadenaVacia))
console.log('Cero: ',Boolean(cero))
console.log('valorNull: ',Boolean(valorNull))
console.log('valorIndef: ',Boolean(valorIndefinido))


