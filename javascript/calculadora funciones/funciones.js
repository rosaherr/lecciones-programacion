
function sumar(numero1, numero2) {    
    return operacion= console.log("sumar", numero1 + numero2)
}
function restar(numero1, numero2) {    
    return console.log("restar", numero1 -  numero2)
}
function multiplicar(numero1, numero2) {    
    return console.log("multiplicar", numero1 * numero2)
}
function dividir(numero1, numero2) {    
    return console.log("dividir", numero1 / numero2)
}
function obtenerValorDeInputById(id) {
    let value = document.getElementById(id).value //ESTA FUNCION REGRESA STRINGS
    value = parseInt(value) // ESTA FUNCION CONVIERTE STRIN A NUMERICO
    return value
}

function obtenerValorDeSelectById(id) {
    return document.getElementById(id).value //ESTA FUNCION REGRESA STRINGS
     
}

// let n1= obtenerValorDeInputById ("numero1")
// let n2= obtenerValorDeInputById ("numero2")
// let operacion= obtenerValorDeInputById ("operacion")

 


