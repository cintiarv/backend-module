const fs = require('fs');


let koders = ()=>{
    fs.readFile('./koders.json', 'utf8', function (err, data){
        err 
        ? console.log(err) 
        : console.log(JSON.parse(data).koders)
        let kodersArray = JSON.parse(data).koders;
        console.log(kodersArray)
        kodersArray.push({id: 123,name:'cin',lastNAme:'ruiz', age:25})
        console.log(kodersArray)
        let x = JSON.stringify(kodersArray)
        function write(){fs.writeFile('./koders.json', x, function(err){ 
            if (err){
                console.log(err);
            }else{
                console.log('archivo creado')
            }
            });
        }
        write()
    })
}

koders()

