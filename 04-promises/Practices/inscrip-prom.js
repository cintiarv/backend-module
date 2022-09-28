//Realizar proceso utilizando promesas y async-await

const inscriptionKodemia = {
    name:'Cin Ruiz',
    isInterviewed: false,
    hasOffer: false,
    isInscript:false,
    canTakeClass: false
}

function interview(koderToInterview){
    return new Promise((resolve, reject) => {
        console.log(`Entrevistando a ${koderToInterview.name}`)
        setTimeout(()=>{
            koderToInterview.isInterviewed = true;
            !koderToInterview.isInterviewed
            ?reject(`${koderToInterview.name} no ha podido ser entrevistada :(`)
            :resolve(koderToInterview)
        },2000)
    })
   
}


function doOffer(koderToOffer){
    return new Promise((resolve, reject) => {
        console.log(`Enviando una oferta a ${koderToOffer.name}`)
        setTimeout(()=>{
            koderToOffer.hasOffer = true
            !koderToOffer.hasOffer
            ?reject(`${koderToOffer.name} no pudo recibir la oferta :(`)
            :resolve(koderToOffer)
        },2000)
    }
)}

function inscript(koderInscript){
    return new Promise((resolve, reject) => {
        console.log(`Eviando inscripción a ${koderInscript.name}`)
        setTimeout(()=>{
            koderInscript.isInscript = true
            !koderInscript.isInscript
            ?reject(`${koderInscript.name} no pudo recibir la oferta :(`)
            :resolve(koderInscript)
        },2000)
    }
)}

function takeClass(koderTakingClass){
    return new Promise((resolve, reject) => {
        console.log(`Viendo si ${koderTakingClass.name} puede tomar clase`)
        setTimeout(()=>{
            koderTakingClass.canTakeClass = true
            !koderTakingClass.canTakeClass 
            ?reject(`${koderTakingClass.name} no puede tomar clase`)
            :resolve(koderTakingClass)
        },2000)
    })   
}

interview(inscriptionKodemia)
    .then((koderToInterview) => {
        console.log(`${koderToInterview.name} ya ha sido entrevistada!`)
        console.log(koderToInterview)
        //
        doOffer(koderToInterview)
            .then((koderToOffer) => {
                console.log(`${koderToOffer.name} ya ha recibido la oferta!`)
                console.log(koderToOffer)
                //
                inscript(koderToOffer)
                .then((koderInscript) => {
                    console.log(`${koderInscript.name} ya se ha inscrito!`)
                    console.log(koderInscript)
                    //
                    takeClass(koderInscript)
                    .then((koderTakingClass) => {
                        console.log(`${koderTakingClass.name} ya puede tomar clase!`)
                        console.log(koderTakingClass)
                    })
                    .catch((error) => {
                        console.log('Error: ', error)
                    })
                })
                .catch((error) => {
                    console.log('Error: ', error)
                })
                
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
        })
        .catch((error) => {
            console.log('Error: ', error)
        })
    

