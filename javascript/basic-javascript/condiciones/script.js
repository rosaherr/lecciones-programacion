let temperatura = 40


/* 
<   menos que
>   mayor que
<=  menor o igual
>=  mayor que
==  igual
!=  si no es igual 
*/

// if ( temperatura <= 15  ) {
//     console.log("NECESITAMOS UN SUETER")
// } else if (  temperatura == 20) {
//     console.log("huuuu  clima ideal")
// //cualquier otra cosa que no se cumpla en las condiciones
// } else if (temperatura > 35){ 
//     console.log("TEN CUIDADO, CONSUME AGUA, COME SANO PERO COME!")
// } else { 
//     console.log("PODEMOS SALIR EN CHORT!")
// }

// || OR 
// && AND

let dinero = 14000;
/*
    HAY UNA MOTO QUE CUESTA 16000 A NEGOCIAR
    PRECIO MINIMO DE LA NEGOCIACION 13000
*/
if(dinero >= 16000 && dinero >= negociacion(100) ) {
    alert(" felicidades chusito tienes una moto para repartir amor por el mundo")
} else {
    alert(" mejor una harley")
}


function negociacion(nivelChantaje) {
    
    if(nivelChantaje == 100) {
        return 10000
    } else if (nivelChantaje >= 50) {
        return 13000
    } else {
        return 15000
    }
}