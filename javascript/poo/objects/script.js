// OBJETO QUE NO ES INSTANCIA DE NINGUNA CLASE

// {
//     edad: "18 años", 
//     lugar_de_nacimiento: "SALTILLO, OCOSINGO"    
// }
function comer() {
    console.log("comiendo hamburguesas")
}
var comer = () => {
    console.log("comiendo hamburguesas")
}

var dormir = function() {
    console.log("mimiendo")
}


function imprimirElements(element) {
    console.log(element)
}
 
var arreglito = ['hola', 'como,', 'estas']
console.log(arreglito[2])

var imprimirElementos = (element) => {
    console.log(element)
}
// AMBAS LINEAS HACEN LO MISMO 30 31
// arreglito.forEach( imprimirElementos )
arreglito.forEach( element => {
    console.log(index)
} )

arreglito.forEach(
    function(element) {
        console.log(element)
    }
);

//  EL FOR EACH ES UN METODO QUE TODAS LAS 
//  VARIABLES DE TIPO ARREGLO TIENEN Y RECIBE
//  UNA FUNCION LA CUAL SE VA A EJECUTAR 1 VEZ
//  POR CADA ELEMENTO EN EL ARREGLO, PERO ESTA FUNCION
//  DEBE RECIBIR UN PARAMETROS QUE ES EL ELEMENTO

const rosita = { 
    nombre: 'rosita',
    apellido: 'Herrera',
    edad: "18 años", 
    lugar_de_nacimiento: "SALTILLO, OCOSINGO",
    comer: function() {
        console.log(this.nombre +" esta comiento")
    },    
    dormir: function() {
        console.log( this.nombre + " esta durmiendo")
    },
    estudiar: function() {
        console.log( this.nombre + " esta estudiando")
    },
    recorrerAtributos: function(logica){
        logica(this.nombre)
        logica(this.apellido)
        logica(this.edad)
        logica(this.lugar_de_nacimiento)
    }

}


// const mateo = { 
//     nombre: 'mateo',
//     apellido: 'TREJO',
//     edad: "16 años", 
//     lugar_de_nacimiento: "SALTILLO, OCOSINGO",
//     comer: function() {
//         console.log(this.nombre +" esta comiento")
//     },    
//     dormir: function() {
//         console.log( this.nombre + " esta durmiendo")
//     },
//     estudiar: function() {
//         console.log( this.nombre + " esta estudiando")
//     }
// }

// rosita.dormir()
// mateo.dormir()

// la persona NOMBRE_COMPLETO_DE_ROSITA tiene EDAD_DE_ROSITA 
// y nacio en LUGAR_DE_NACIMIENTO_DE_ROSITA
// let mensaje = " la persona " +  
// console.log(rosita.apellido)



// class Persona {
//     constructor(nombre, apellido, edad, mesNacimiento) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.mesNacimiento = mesNacimiento
//         this.sexo = null             
//     }    
//     comer() {
//         console.log(this.nombre +" esta comiento")
//     }
//     dormir() {
//         console.log( this.nombre + " esta durmiendo")
//     }
//     estudiar() {
//         console.log( this.nombre + " esta estudiando")
//     }
//     getFullName() {
//         return this.nombre + " " + this.apellido
//     }    

// }
// const mateo =   new Persona("Mateo", "Trejo", 6, 'Octubre') 
// const rosita =   new Persona("Rosita", "Herra", 15, 'MAYO')
// rosita.comer()
// rosita.nombre = "violeta"
// rosita.comer()
// mateo.comer()

// console.log( francisco.getOroscopo() )
// console.log( mateo.getOroscopo() )
// console.log( rosita2.getOroscopo() )

