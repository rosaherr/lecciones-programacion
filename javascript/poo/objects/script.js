// OBJETO QUE NO ES INSTANCIA DE NINGUNA CLASE
const rosita = { 

    nombre: 'rosita',
    apellido: 'Herrera',
    getFullName: function() {
        return this.nombre + " " + this.apellido
    }

}
 
class Persona {
    constructor(nombre, apellido, edad, mesNacimiento) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.mesNacimiento = mesNacimiento
        this.sexo = null
        this.getFullName()        
    }
    getFullName() {
        return this.nombre + " " + this.apellido
    }
    getOroscopo() {
        if(this.mesNacimiento == 'DICIEMBRE') {
            return 'Capricornio'
        } else if (this.mesNacimiento == 'MAYO'){
            return 'Tauro'
        } else {
            return ""
        }
         
    }

}
 
const francisco = new Persona("Francisco", "Rodrigez", 20, 'DICIEMBRE')
const mateo =     new Persona("Mateo", "Trejo", 7, 'DICIEMBRE')
const rosita2 =   new Persona("Rosita", "Herra", 15, 'MAYO')

console.log( francisco.getOroscopo() )
console.log( mateo.getOroscopo() )
console.log( rosita2.getOroscopo() )

