//función que reciba un nombre como parámetro y devuelva un saludo


function saludar(nombre){
    return `hola ${nombre} como estás!`
}
console.log(saludar('cin'));

//crear una función que devuelva un nombre aleatorio de un arreglo

function random(){
    let arreglo = ['cin', 'lourdes', 'bris', 'josé', 'katy'];
    const min = 0;
    const max = arreglo.length;
    const indexRandom = Math.floor(Math.random() * (max-min) + min);
    return arreglo[indexRandom]; 
}

const nameRandom = random();
console.log(nameRandom)

//pasando como argumento la ejecución de una función

const firsGreet = saludar(random());
const secondGreet = saludar(nameRandom);

console.log(firsGreet);
console.log(secondGreet);

//pasar como referencia
const otraFuncion = hola;
console.log(otraFuncion);
const a = otraFuncion;
const b = hola;
console.log(b('cin'))


//Funciones 
