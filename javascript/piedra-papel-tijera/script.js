function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
var scoringMachine = 0
var scoringUser = 0


var rock = 0;
var paper = 1;
var scissors= 2;



function startGame (choice) {
    var opcionUsuario = choice
    var opcionMaquin = Math.floor(Math.random() * (3 - 0)) + 0;
    setIconByGameOption (opcionUsuario, "optionUser")
    setIconByGameOption (opcionMaquin, "optionMachine")



    if (opcionUsuario == rock) {
        alert("Elegiste Piedra");
        if (opcionMaquin == rock) {
            alert("Empate");
        }
        else if (opcionMaquin == paper) {
            alert("Perdiste");
            scoringMachine = scoringMachine + 1
        }
        else if (opcionMaquin == scissors) {
            alert("Ganaste");
            scoringUser = scoringUser + 1
        }
    }

    else if (opcionUsuario == paper) {
        alert("Elegiste Papel");
        if (opcionMaquin == rock) {
            alert("Ganaste");
            scoringUser++
        }
        else if (opcionMaquin == paper) {
            alert("Empate");
        }
        else if (opcionMaquin == scissors) {
            alert("Perdiste");
            scoringMachine++
        }
    }

    else if (opcionUsuario == scissors) {
        alert("Elegiste Tijera");
        if (opcionMaquin == rock) {
            alert("Pediste");
            scoringMachine+=1
        }
        else if (opcionMaquin == paper) {
            alert("Ganaste");
            scoringUser+=1
        }
        else if (opcionMaquin == scissors ) {
            alert("Empate");
        }
    }
    else {
        alert();
    }

    document.getElementById("scoringUser").textContent= scoringUser;
    document.getElementById("scoringMachine").textContent= scoringMachine;
}
function setIconByGameOption (option, idElement){
    var rockIconHtml = '<i class="choices fas fa-hand-rock fa-10x"></i>'
    var paperIconHtml = '<i class="choices fas fa-hand-paper fa-10x"></i>'
    var scissorsIconHtml = '<i class="choices fas fa-hand-scissors fa-10x"></i>'
    if (option == rock) {
        document.getElementById (idElement).innerHTML = rockIconHtml
    }
     else if (option == paper) {
        document.getElementById (idElement).innerHTML = paperIconHtml
     }
     else if (option == scissors) {
        document.getElementById (idElement).innerHTML = scissorsIconHtml
     }

}
