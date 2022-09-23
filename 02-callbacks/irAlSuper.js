/* Acciones:
    1-.ir al super -5000ms
    2-. pagar la despensa -3000ms
    3-. llegar a casa -4000ms

    cada vez que haga cada acción se ejecutará un callback
*/

function goToSuperMarket(callback){
    console.log('Llendo al super...')
    setTimeout(() => {
        //ejecuta el callback
        callback(null, 'hola, ya llegue al super')
    }, 5000)
}

function payThings(callback){
    console.log('Haciendo la fila para pagar...')
    setTimeout(()=>{
        callback(null, 'Hola, ya pagué la despensa ')
    }, 3000)
}

function arriveHome(callback){
    console.log('Llendo a casa...')
    setTimeout(()=>{
        callback(null, 'Hola, ya estoy en casa')
    },2000)
}


//callback hell! 
goToSuperMarket((error, msg) =>{
    if(error){ //como null es false -> si va a ejecutarse el else
        console.log('Ha ocurrido un error', err);
    }
            console.log(msg);//ya llegó al super

    payThings((error, msg)=>{
        if(error){ //como null es false -> si va a ejecutarse el else
            console.log('Ha ocurrido un error', err);
        }
            console.log(msg);
        
    arriveHome((error,msg)=>{
        if(error){ //como null es false -> si va a ejecutarse el else
            console.log('Ha ocurrido un error', err);
        }
            console.log(msg);
        
        });
    });
    
});

/* 
Proceso de inscripción a kodemia 
1-. recibir info, entrevista
2-. enviar oferta
3-. inscripción
4-. prebootcamp

Plasmar en funciones y callbacks dicho proceso
Todos los datos cambiarán a true 

*/

const inscriptionKodemia = {
    name:'Cin Ruiz',
    isInterviewed: false,
    hasOffer: false,
    isInscript:false,
    canTakeClass: false
}

function inscription


