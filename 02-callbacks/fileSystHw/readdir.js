const fs = require('fs');

let directory ="fileSystHw";
let dirBuf = Buffer.from(directory);

fs.readdir(dirBuf, (err, files)=>{
    err?console.log('Ha ocurrido un error'):console.log(files)

})