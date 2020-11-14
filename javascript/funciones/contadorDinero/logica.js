let dinero = 0

function obtenerValorDeInputById(id) {
    let value = document.getElementById(id).value //ESTA FUNCION REGRESA STRINGS
    value = parseInt(value) // ESTA FUNCION CONVIERTE STRIN A NUMERICO
    return value 
}
function agregar(){
    dinero = dinero + obtenerValorDeInputById ("numero1")
    console.log (dinero)
    document.getElementById("numero1").value = null



}


// console.log (dinero)
// dinero = dinero + 100
// console.log (dinero)
// dinero = dinero + 100
// console.log (dinero)
// dinero = dinero + 100
// console.log (dinero)


