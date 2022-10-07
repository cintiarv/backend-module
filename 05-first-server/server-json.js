/* 
Crear servidor 
GET/koders{'message': "Aquí se obtendran los koders"}
*/

const http = require ('http');

const server = http.createServer((request, response) =>{ //recibirá un requestListener, se ejecutará cada vez que reciba una petición. 
        if(request.url === '/koders' && request.method ==='GET'){
            response.writeHead(200, { //200(status)
                'Content-Type': 'application/json'
            })
            const msg = { 
                msg:'Aquí se obtendrán todos los koders'
            }
            const msgString = JSON.stringify(msg) //pasarlo a formato json, ya que para pasarlo tiene que ser en texto plano 
            response.write(msgString)
        }
        response.end()
    })
    
server.listen(8080, () => {      
    console.log('Server listening on port 8080'); 
})




