//importando el módulo http
/* const http = require ('http');

const server = http.createServer((request, response) =>{ //recibirá un requestListener, se ejecutará cada vez que reciba una petición. 

    const url = request.url//podemos acceder a lo q viene el el body, url, al método (en este caso es por el método get). x el browser solo puedo realizar peticiones get
    console.log('url: ', url);
    const method = request.method //por qué método nos estan haciendo la petición? 
    console.log('method: ', method);

    response.write('Hola desde mi servidor en node c:')
    response.end() //cerramos la respuesta 
}) 

server.listen(8080, () => {    //el servidor tiene que estar escuchando, recibe un callback de cuando el servidor este arriba manda el msj  
    console.log('Server listening on port 8080'); //8080 -> ambiente de desarrollo 
})

 */
/* 
Ejercicio:
    Reaccionar a las sigueintes rutas:
    GET/ koders -> tiene que responder -> Aquí estarán todos los koders 
    POST /koders -> Aquí puedes crear un koder
    X /x (cualquier método con cualquier ruta) -> No conozco esta solicitud 
*/


const http = require ('http');

const server = http.createServer((request, response) =>{ //recibirá un requestListener, se ejecutará cada vez que reciba una petición. 

    const url = request.url//podemos acceder a lo q viene el el body, url, al método (en este caso es por el método get). x el browser solo puedo realizar peticiones get
    console.log('url: ', url);
    const method = request.method 
    
    if(method == 'GET' && url == '/koders'){
        response.write('Aquí estarán todos los koders ')
    }else if(method == 'POST' && url == '/koders'){
        response.write('Aquí puedes crear un koder')
    }else{
        response.write('No conozco esta solicitud')
    }
    console.log('method: ', method);
    response.end() 
}) 

server.listen(8080, () => {      
    console.log('Server listening on port 8080'); 
})
