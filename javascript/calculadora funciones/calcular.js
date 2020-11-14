function calcular(){
    let n1 = obtenerValorDeInputById ("numero1")
    let n2 = obtenerValorDeInputById ("numero2")
    let operacion = obtenerValorDeSelectById ("operacion")

    
    if (operacion == "SUMA" ) {
     sumar (n1, n2)
    }
    else if(operacion == "RESTA" ) {
        restar (n1, n2)
    }
    else  if (operacion == "DIVISION" ) {
        dividir (n1, n2)
    }
    else if (operacion == "MULTIPLICACION" ) {
        multiplicar (n1, n2)
    }

}


