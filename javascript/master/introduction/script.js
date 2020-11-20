/* 
    DECLARAMOS LA FUNCION PARA QUE LA PODAMOS UTILIZAR
    LAS VECES QUE QUERAMOS
*/

// function suma(numero1, numero2) {
//     let resultado = numero1 + numero2;
//     let mensaje = "El resultado  de la suma es: " + resultado;
//     console.log(mensaje);
// }

// let num1 = 2;
// let num2 = 3;
// // Mandandole variables
// suma(num2, num1);
// // Datos directamente
// suma(13, 10);


 

function startGame(optionUser) {    
    const piedra = 0;
    const papel = 1;
    const tijera = 2;
    if(optionUser == piedra) {
        console.log("es piedra");
    }
    else if(optionUser == papel) {
        console.log("es papel");
    }    
    else if(optionUser == tijera) {
        console.log("es tijera");
    }
}
// var optionUser = optionUser;


function sumita(num1,num2) {
    return num1 + num2
}

let resultado = sumita(1, 11);
console.log(resultado);
console.log( sumita(1, 11) );