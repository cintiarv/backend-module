/* 
async -> Marcar una función como asíncrona
await -> Esperar el resultado de una promesa 

Condiciones:
    -Para usar AWAIT necesitamos una función que marcaremos como asyncrona
    Donde utilizo await necesitamos marcar la función que la contiene como asíncrona 

    -Las funciones marcadas como async, por defetno regresan una promesa 
*/

//generando nueva función q genere todo 
const cinMakePurchases = {
    name:'Cin Ruiz',
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}
cl

function gotToSuperMarket(personGoToSuper){ //ya no recibirá el callback ya que trabajaremos con promesas
    return new Promise((resolve, reject) => {
        console.log(`${personGoToSuper.name} llendo al super...`)
        setTimeout(() =>{
            personGoToSuper.atSuperMarket = true
            if(!personGoToSuper.atSuperMarket){
                reject(`${personGoToSuper.name} no pudo llegar al supermercado`)
            }
            resolve(personGoToSuper)
        }, 2000)
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


async function main(){
    const personAtSuper = await gotToSuperMarket(cinMakePurchases) //regresa una promesa
    console.log(`${personAtSuper.name} ya llegó al super`)
    console.log(personAtSuper) 

    const personWithHisThings = await payingThings(personAtSuper)
    console.log(`${personWithHisThings.name} ya pagó su despensa`)
    console.log(personWithHisThings)
    
    const personAtHome = await goToHome(personWithHisThings)
    console.log(`${personAtHome.name} ya esta en casa`)
    console.log(personAtHome) 
}

main()
    .then(() => {
        console.log('Todo cool!')
    })
    .catch((error) => {
        console.error('Error: ', error)
    })
    
