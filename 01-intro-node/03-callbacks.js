/*  function irAlSuper(callback){
    console.log('Llendo al super...')
    console.log('Llegue al super')
    const msj = callback();
    console.log(msj);
 }


 //declaración de la función
 function avisar(){
    return 'Hola, ya estoy en el super'
 }

irAlSuper(avisar);  */
 //no hacer esto!->  irAlSuper(avisar()); //aqui estoy pasando la ejecución de una función -> string
//arroja error de cb no es una función ya que lo que pasa es el str no la función

//utilizando  firma

/* 
 1-. cuando hayamos llegado
 2-. avisar cuando haya compraod la despensa
 3-. avisar cuando haya llegado a casa
 */

function irAlSuper(callback){
    console.log('Llendo al super...')
    console.log('Llegue al super')
    const msj = callback(null, 'hola mamá ya estoy en el super');
    console.log(msj);
 }


 //la firma recibe el error y la data 
 function avisar(error, msj){
    if(error){
        console.log('A ocurrido un error: ',error);
    }else{
        return msj;
    }
 }


 function pay(callback){
    console.log('pagando la despensa...')
    const msj = callback(null, 'hola, ya pague la despensa');
    console.log(msj);
 }

 function arriveHome(callback){
    console.log('Llegando a casa')
    const msj = callback(null, 'hola, ya estoy en casa');
    console.log(msj);
 }

 //sincronía
 irAlSuper(avisar)
 pay(avisar)
 arriveHome(avisar)

//síncrono es una línea despues de otra
 console.log('hola')
 console.log('como estan')

 //Asíncrono -> no tienes q esperar q se ejecute la anterior para q se pueda ejecutar
 
 console.log('hola koders!')

 setTimeout(()=>{
    console.log('hola')
 },2000)

 console.log('buenas noches') //no esperó que se ejecutará la anterior
 console.log('descansen koders')

 //caso de uso, crenaod un usuario en la base de datos
 
/*  const userCreated = createUser();

 const userTemplate = `${userCreated.name} ${userCreated.lastName}` */

let num1 
let num2

 setTimeout(() =>{
    console.log()
    num1 = 20;
    num2 = 30;
    console.log(num1+num2); 
 },3000);


/* tarea
 1-. cuando hayamos llegado -> 5s
 2-. avisar cuando haya compraod la despensa -> 4s
 3-. avisar cuando haya llegado a casa -> 5s
 */

 console.log('Llendo al super');
 function irAlSuper(callback){
    const msj = callback(null, 'ya estoy en el super')
    console.log(msj)
 };

 function avisar(error, msj){ //declaración de callback para todas las funciones 
    if(error){
        console.log('A ocurrido un error: ',error);
    }else{
        return msj;
    }
 }

function pay(callback){
    const msj = callback(null, 'ya pagué la despensa')
    console.log(msj);
}

function arriveHome(callback){
    const msj = callback(null, 'ya estoy en casa')
    console.log(msj);
}

 setTimeout(irAlSuper, 5000, avisar);
 setTimeout(pay, 9000, avisar);
 setTimeout(arriveHome, 14000, avisar);
