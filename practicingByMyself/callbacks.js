/* const getUsuarioById = (id, callback) =>{
    const usuario = {
        id,
        nombre: 'cin'
    }
    setTimeout(()=>{
        callback(usuario)
    },2000)
}



getUsuarioById(10,(usuario)=>{
    console.log(usuario)
});

getUsuarioById(10,(usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
});
 */

//Callback hell, //función q me permita traerme la info de un empleado por su id 


const empleados = [
    {
        id:1,
        nombre:'cin'
    },
    {
        id:2,
        nombre:'fer'
    },
    {
        id:3,
        nombre:'nico'
    }
]

const salarios = [
    {
        id: 1,
        salario: 10
    },
    {
        id: 2,
        salario: 20
    },
]

//función q me permita traerme la info de un empleado por su id 
const getEmpleado = (id, callback) =>{
    const empleado = empleados.find(e => e.id === id)
    if(empleado){
        callback (null, empleado);
    }else{
        callback (`Empleado con id ${id} no existe`)
    }
}

getEmpleado(10, (err, empleado) =>{
    if(err){
        console.log('error');
        return console.log(err)
    }else{
        console.log('Empleado existente')
        console.log(empleado)
    }
})


const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)
    if(salario){
        callback (null, salario);
    }else{
        callback (`Empleado con id ${id} no existe`)
    }
}

getSalario(10,(err,empleado)=>{
    if(err){
        console.log('error');
        return console.log(err)
    }else{
        console.log(`El salario del empleado es ${empleado.salario} pesos`)
    }
})