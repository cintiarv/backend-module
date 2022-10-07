//Promesas en cadena 

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
    {
        id: 3
    }
]


/* const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre
        !empleado
            ?reject(`Empleado con id ${id} no existe`)
            :resolve(empleado)
    })
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id )?.salario
        !salario
            ?reject(`El empleado con id ${id} no tiene salario`)
            :resolve(salario)
    })
} 

let nombre;
const id = 1;
 getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        console.log(`El empleado es ${empleado}`);
        return getSalario(id, empleado) //sin el return no podemos encadenar otra promesa
    })
    .then((salario) => {
        console.log(`El empleado: ${nombre} tiene un salario de: ${salario} pesos`);
    })
    .catch(err => console.log(err)) //este catch es para las 2 promesas
 */




    //async-await

    const getEmpleado = (id) => {
        return new Promise((resolve, reject) => {
            const empleado = empleados.find(e => e.id === id)?.nombre //si todo esto devuelve algo que no es undefined.. ejecuta lo que sigue
            !empleado
                ?reject(`Empleado con id ${id} no existe`)
                :resolve(empleado)
        })
    }
    
    const getSalario = (id) => {
        return new Promise((resolve, reject) => {
            const salario = salarios.find(s => s.id === id )?.salario //si todo esto devuelve algo que no es undefined.. ejecuta lo que sigue
            !salario
                ?reject(`El empleado con id ${id} no tiene salario`)
                :resolve(salario)
        })
    }

    const id = 3;

    const getInfoUsuario = async() =>{ //se convierte en una func asícrona cuando le agregas el async
    try{ const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empleado: ${empleado} es de: ${salario}`;  
    } catch(error){
        throw error;
    }
    }
    getInfoUsuario(id)
        .then(msg =>{
            console.log(msg)
            console.log('todo bien');
        } )
        .catch(err => {
            console.log(err)
            console.log('chale');
        })
        

        