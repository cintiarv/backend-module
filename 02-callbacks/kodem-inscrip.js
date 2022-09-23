/* 
Proceso de inscripción a kodemia 
1-. recibir info, entrevista
2-. enviar oferta
3-. inscripción
4-. prebootcamp

Plasmar en funciones y callbacks dicho proceso
Todos los datos cambiarán a true 

*/
/* 
const KodemiaInscription = {
    name:'Cin Ruiz',
    isInterviewed: false,
    hasOffer: false,
    isInscript:false,
    canTakeClass: false
}

function interview(objeto, callback){
    console.log('Publicidad de kodemia')
    setTimeout(() => {
        objeto.isInterviewed = true;
        callback(null,objeto)
    }, 1000)
}

function offer(objeto, callback){
    setTimeout(() => {
        objeto.hasOffer = true;
        callback(null, objeto)
    }, 2000)
}

function inscript(objeto, callback){
    setTimeout(() => {
        objeto.isInscript = true;
        callback(null, objeto)
    }, 2000)
}

function takeClass(objeto, callback){
    setTimeout(() => {
        objeto.canTakeClass = true;
        callback(null, objeto)
    }, 2000)
}


interview(KodemiaInscription,(error,objeto )=>{
    if(error){ //como null es false -> si va a ejecutarse el else
        console.log('Ha ocurrido un error', err);
    }else{
        console.log(objeto);
    }
    offer(KodemiaInscription,(error, objeto)=>{
        if(error){ //como null es false -> si va a ejecutarse el else
            console.log('Ha ocurrido un error', err);
        }else{
            console.log(objeto);
        }
        inscript(KodemiaInscription,(error, objeto)=>{
            if(error){ //como null es false -> si va a ejecutarse el else
                console.log('Ha ocurrido un error', err);
            }else{
                console.log(objeto);
            }
            takeClass(KodemiaInscription,(error, objeto)=>{
                if(error){ //como null es false -> si va a ejecutarse el else
                    console.log('Ha ocurrido un error', err);
                }else{
                    console.log(objeto);
                }
                
    })
})
})
})
 */


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
        koderToInterview.isInterviewed = true;
        error = !koderToInterview.isInterviewed
        ?`${koderToInterview.name} no ha sido entrevistada` //entonces
        :null                                               //else
        callback(null,koderToInterview)
    },3000)
}


function doOffer(koderToOffer, callback){
    console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`)
    setTimeout(()=>{
        let error = null
        koderToOffer.hasOffer = true
       error = !koderToOffer.hasOffer && `${koderToOffer.name} no tiene una oferta` 
        callback(error, koderToOffer)
    },2000)
}

function inscript(koderInscript, callback){
    console.log(`Viendo si ${koderInscript.name} se inscribe`)
    setTimeout(()=>{
        let error = null
        koderInscript.isInscript = true
        if(!koderInscript.isInscript) { //si koderInscript.isInscript == false
            error = `No se logro entrevistar a ${koderToInterview.name}`
        }
        callback(error, koderInscript)

    },2000)
}

function takeClass(koderTakingClass, callback){
    console.log(`Viendo si ${koderTakingClass} puede tomar clase`)
    setTimeout(()=>{
        let error = null
        koderTakingClass.canTakeClass = true
        error = !koderTakingClass.canTakeClass ? `${koderTakingClass.name} no puede tomar clase` :null
        callback(error, koderTakingClass)
    },2000)
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
        console.log(`${koderOferted.name} ya tiene oferta!`)
        console.log(koderOferted)
    
        //inscript
        inscript(koderOferted, (errorToInscript, koderInscript) => {
            if(errorToInscript){
                console.log('Error en inscribirse: ', errorToInscript)
            }
            console.log(`${koderInscript.name} ya tiene oferta!`)
            console.log(koderInscript)

            //taking class
            takeClass(koderInscript,(errorToTakeClass,koderTakingClass)=>{
                if(errorToTakeClass){
                    console.log('Error en tomar clase: ', errorToTakeClass)
                }
                console.log(`${koderTakingClass.name} ya tiene oferta!`)
                console.log(koderTakingClass)

            })

        })
    })
})
