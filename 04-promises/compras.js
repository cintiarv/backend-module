//promise hell!

const cinMakePurchases = {
    name:'Cin Ruiz',
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}

function gotToSuperMarket(personGoToSuper){ //ya no recibirá el callback ya que trabajaremos con promesas
    return new Promise((resolve, reject) => {
        console.log(`${personGoToSuper.name} llendo al super...`)
        setTimeout(() =>{
            personGoToSuper.atSuperMarket = true 
            if(!personGoToSuper.atSuperMarket){
                reject(`${personGoToSuper.name} no pudo llegar al supermercado`)
            }
            resolve(personGoToSuper)
        }, 3000)
    })
}

function goToHome(personGoHome){
    return new Promise((resolve, reject) => {
        console.log(`${personGoHome.name} llego a casa...`)
        setTimeout(() => {
            personGoHome.atHome = true
            if(!personGoHome.atHome){
                reject(`${personGoHome.name} no pudo llegar a casa`)
            }
            resolve(personGoHome)
        }, 2000)
    })
}

function payingThings(personToPay){
    return new Promise((resolve, reject) => {
        console.log(`${personToPay.name} esta haciendo fila para pagar...`)
        setTimeout(() => {
            personToPay.paidPantry = true
            if(!personToPay.paidPantry){
                reject(`${personToPay.name} no pudo pagar la despensa`)
            }
            resolve(personToPay)
        },2000)
    })
}

gotToSuperMarket(cinMakePurchases)
    .then((personaAtTheSuper) => {
        console.log(`${personaAtTheSuper.name} ya esta en el super!`)
        console.log(personaAtTheSuper)
        //
        payingThings(personaAtTheSuper)
        .then((personWithHisThings) => {
            console.log(`${personWithHisThings.name} ya pagó su despensa`)
            console.log(personWithHisThings)
            //
            goToHome(personWithHisThings)
            .then((personAtHome) => {
                console.log(`${personAtHome.name} ya está en casa`)
                console.log(personAtHome)
            })
            .catch((error) => {
                console.error('Error: ', error)
            })
        })
        .catch((error) => {
            console.error('Error: ', error)
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

/* 
Encadenamiento de promesas:sa 
*/

gotToSuperMarket(cinMakePurchases)
.then((personaAtTheSuper) => {
    console.log(`${personaAtTheSuper.name} ya llegó al super`)
    console.log(personaAtTheSuper)
    return payingThings(personaAtTheSuper)  //cuando se termina de ejecuta el then regres otra prome
})
.then((personWithHisThings) => {
    console.log(`${personWithHisThings.name} ya pagó su despensa`)
    console.log(personWithHisThings)
    return goToHome(personWithHisThings)
})
.then((personAtHome) => {
    console.log(`${personAtHome.name} ya está en casa`)
    console.log(personAtHome)
})
.catch((error) => {
    console.error('Error: ', error) // va a cachar cualquier error 
})