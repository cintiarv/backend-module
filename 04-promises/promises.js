/* constructor -> Recibe una función como parámetro (callback), dentro del callback recibe dos funciones más (resolve y rejected

/* resolve(función)-> al invocarla se cambiará el estado de la promesa a resolved
reject(función)-> al invocarla se cambiará el estado de la promesa a rejected
 */

/* new Promise((resolve, reject)=>{
if('todo cool')resolve('Todo excelente!')
if('hay un error')reject('Paso algo </3')
}) */

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = null
        if(error){
            reject('Ocurrió un Error, y no se que pasó') //no es necesario retornar
        }
        resolve('Todo cool!, este es el result')
    }, 2000);
});

/* 
Manejar una promesa por medio de los métodos:
.then(() => {}) -> Maneja la promesa cuando haya sido exitosa
                                        -Recibe un callback
                                        -Regresa lo que se pasa en la función resolve()

.catch(() => {}) ->  Maneja la promesa cuando haya sido rechazada 
                                        -Recibe un callback
                                        -Regresa lo que se pasa en la función reject()
*/

myFirstPromise
    .then((result) =>{
        console.log('result', result)
        //cuando sea exitoso
    })
    .catch((error) =>{
        console.log('error', error)
        //cuando haya ocurrido un error 
    })

    /* 
    Otra forma promise:
    -Wrappeado por una función

    function algoAsincrono(){
        regresar la promesa
    }
    */

    function algoAsincrono(){ //promesa wrappeada por una función 
        return new Promise((resolve, reject) => { //me regresa una promesa
            setTimeout(()=>{
                let error = null
                if(error){
                    reject('Hubo un error, ayuda') //se va al catch en error
                }
                resolve('Todo cool!') //se va al then en result
            },1000)
        })
    }

    algoAsincrono()
    .then((result) => { //then y catch nos permiten saber que pasó con esa promesa
        console.log('Result: ', result)
    })
    .catch(() => {
        console.error('Error', error)
    })

    