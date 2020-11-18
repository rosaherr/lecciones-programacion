var piedra = 0;
var papel = 1;
var tijera= 2;

var opcionUsuario;
var opcionMaquin = Math.floor(Math.random() * (3 - 0)) + 0;

opcionUsuario = prompt ("¿que eliges?\nPiedra: 0\n Papel: 1\n Tijera:2",0)

if (opcionUsuario == piedra) {
    alert("Elegiste Piedra");
    if (opcionMaquin == piedra) {
        alert("Empate");
    }
    else if (opcionMaquin == papel) {
        alert("Perdiste");
    }
    else if (opcionMaquin == tijera) {
        alert("Ganaste");
    }
}

else if (opcionUsuario == papel) {
    alert("Elegiste Papel");
    if (opcionMaquin == piedra) {
        alert("Ganaste");
    }
    else if (opcionMaquin == papel) {
        alert("Empate");
    }
    else if (opcionMaquin == tijera) {
        alert("Perdiste");
    }
}

else if (opcionUsuario == tijera) {
    alert("Elegiste Tijera");
    if (opcionMaquin == piedra) {
        alert("Pediste");
    }
    else if (opcionMaquin == papel) {
        alert("Ganaste");
    }
    else if (opcionMaquin == tijera) {
        alert("Empate");
    }
}
else {
    alert();
}