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

function interview(objeto, callback){
    console.log('Publicidad de kodemia')
    setTimeout(() => {
        let propiedad1 = objeto.isInterviewed
        propiedad1 = true;
        callback(null,'Ye me entrevistaron ')
    }, 1000)
}

function offer(objeto, callback){
    setTimeout(() => {
        objeto.hasOffer = true;
        callback(null, inscriptionKodemia.hasOffer)
    }, 1000)
}

function inscript(objeto, callback){
    setTimeout(() => {
        objeto.isInscript == true;
        callback(null, inscriptionKodemia.isInscript)
    }, 1000)
}

function inscript(objeto, callback){
    setTimeout(() => {
        objeto.canTakeClass == true;
        callback(null, inscriptionKodemia.canTakeClass)
    }, 1000)
}


interview(inscriptionKodemia,(error, msg)=>{
    if(error){ //como null es false -> si va a ejecutarse el else
        console.log('Ha ocurrido un error', err);
    }else{
        console.log(propiedad1)
    }
})


offer(inscriptionKodemia,(error, objeto)=>{
    if(error){ //como null es false -> si va a ejecutarse el else
        console.log();
    }else{
    }
})


//solución de Fer
const inscriptionKodemia = {
    name:'Cin Ruiz',
    isInterviewed: false,
    hasOffer: false,
    isInscript:false,
    canTakeClass: false
}

function interview(koderToInterview, callback){
    console.log(`Entrevistando a ${koderToInterview.name}`)
    setTimeout(()=>{
        let error = null
        koderToInterview.inscriptionKodemia = true;
        if(!koderToInterview.isInterviewed){
            error=`No se logró entrevistar a ${koderToInterview.name}`
        }
        callback(null,koderToInterview)
    },3000)
}


function doOffer(koderToOffer, callback){
    console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`)
    setTimeout(()=>{
        let error = null
        koderToOffer.hasOffer = true
        error = !koderToOffer.hasOffer
                    //operador ternario if else corto 
                    ?`${koderToOffer.name} no tiene una oferta`//si cumple
                    :null//si no cumple
                    //o error = !koderToOffer.hasOffer && `${koderToOffer.name} no tiene una oferta` si 
        callback(error, koderToOffer)
    },3000)
}


interview(inscriptionKodemia, (errorToInterview, koderInterviewed) =>{
    if(errorToInterview){
        console.log('Error entrevista: ', errorToInterview)
        return
    }
    console.log(`${koderInterviewed.name} ha sido entrevistada`)
    console.log(koderInterviewed)

    //Oferta
    doOffer(koderInterviewed, (errorDoOffer, koderOferted) => {
        if(errorDoOffer){
            console.log('Error oferta: ', errorDoOffer)
        }
        console.log(`${koderInterviewed.name} ya tiene oferta!`)
        console.log(koderInterviewed)

    })
})