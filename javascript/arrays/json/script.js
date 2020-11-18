let persona1 = {
    nombre: "rosa maria",
    calificacion: 10,
    apellido: "herrera"
}

let persona2 = {
    nombre: "Mateo",
    calificacion: 8,
    apellido: "herrera"
}

let texto = "asdfasdf"
let numero = 214212
let arreglo = ["asdfa", 213212531]
let jsons = {
    texto: "asdfasdf",
    numero: 214212,
    arreglo: [ 1, 2, 3]
}

// -------------------- Comienza el  ejemplo de uso de jsons en arreglos -----------------------------
let arregloDeJson = [
    { nombre: "Maria", materias:   [ 
                                            { materia: "español", calificacion: 10 }, 
                                            { materia: "matematicas", calificacion: 5 } 
                                        ] ,                         
    },
    { nombre: "Mateo", materias:   [ 
                                            { materia: "español", calificacion: 10 }, 
                                            { materia: "matematicas", calificacion: 5 } 
                                        ] 
    },
    { nombre: "Kika", materias:   [ 
                                            { materia: "español", calificacion: 10 }, 
                                            { materia: "matematicas", calificacion: 5 } 
                                        ] 
    },
]

 
for(let alumno of arregloDeJson) {
    let sumatoria = 0;    
    for(let materia of alumno.materias) {   
    /* 
        lo de arriba hace eso pero no con el mismo valor de los atributos del json
        let materia = { materia: "español", calificacion: 10 } 
    */
        sumatoria += materia.calificacion
    }
    let promedio = sumatoria/alumno.materias.length
    console.log("el alumno: " + alumno.nombre + " tiene un promedio de: " + promedio)
}

// Arriba  ejemplo de uso real y practico de json y arreglo --------------------------------------------------------------

/*
    Declaracion de json
    let persona = {    
        // nombre:    es el nombre del atributo del json
        nombre: "Maria" // -> es el valor del atributo nombre
    }

    let persona = {            
        nombre: "Maria"
    }

    para acceder a los atributos de un json
    persona.nombre -> es igual a maria
    console.lo(persona.nombre)     -> nos va a imprimir maria

    persona.nombre = "Jesus"
    console.lo(persona.nombre)     -> nos va a imprimir Jesus

*/

let arregloAlumnos = [];

function agregarAlumno() {
    let nombre = getValueOfElementById('nombre')
    let apellido = getValueOfElementById('apellido')
    let calificacion = getNumberOfInputById('calificacion')

    // Esto es un json
    let persona = {        
        nombre: nombre,
        apellido: apellido,
        calificacion: calificacion,
    }

    // Agrega el json a una posicion del arreglo
    arregloAlumnos.push(persona)
    
    let sumatoria = 0;    
    // Por cada elemento json en el arreglo se le pasa a la variable alumno
    for(let alumno of arregloAlumnos) { 
        sumatoria += alumno.calificacion      
        // AQUI TTIENES QUE AGREGA LA LOGICA
    }
    let promedio = sumatoria/arregloAlumnos.length
    console.log("El salon tiene un promedio de: " + promedio)
    
    

}
