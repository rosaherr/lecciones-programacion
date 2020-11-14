
function obtenerValorDeInputById(id) {
    let value = document.getElementById(id).value //ESTA FUNCION REGRESA STRINGS
    value = parseInt(value) // ESTA FUNCION CONVIERTE STRIN A NUMERICO
    return value 
}
function centigradosAFahrenheit(centigrados) {
    return (centigrados * (9/5) ) + 32             
}
function FahrenheitACentigrados(fahrenheit){
    return (32*fahrenheit -32) * 5/9
}

function convertirCaF() {

    let centigrados = document.getElementById("centigradosInput").value;
    centigrados = parseInt(centigrados)               

    let fahrenheit = centigradosAFahrenheit(centigrados)

    console.log("Temperatura C° as F°", fahrenheit)
    let mensaje = "Temperatura C° as F° " + fahrenheit
    putMessageOnHtmlById (mensaje, "mensajeC")

}
function convertirFaC () {
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    fahrenheit = parseInt(fahrenheit) 
    let centigrados = FahrenheitACentigrados(fahrenheit)
    console.log ("temperatura F° as C°", centigrados)
    let mensaje = "Temperatura C° as F° " + centigrados
    putMessageOnHtmlById (mensaje, "mensajeF")
}
function putMessageOnHtmlById(texto, id) {
    document.getElementById(id).innerHTML = texto
}


