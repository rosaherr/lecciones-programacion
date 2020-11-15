var listaDeCalificaciones = [10, 7, 8, 9, 5, 6, 20, 50, 5];

let sumatoria = 0;    
let index = 0;
for(let calificacion of listaDeCalificaciones) {
    sumatoria += calificacion 
}
var avg = sumatoria/listaDeCalificaciones.length;
// alert (avg + " promedio")

var calificacionMasAlta = 0
for(let calificacion of listaDeCalificaciones) {
 if (calificacionMasAlta< calificacion)   {
     calificacionMasAlta = calificacion
 }
}
// alert (calificacionMasAlta + " calificacion mas alta")

var calificacionMasBaja = calificacionMasAlta
for(let calificacion of listaDeCalificaciones) {
 if (calificacionMasBaja> calificacion)   {
     calificacionMasBaja = calificacion
 }
}
alert (calificacionMasBaja + " calificacion mas baja")



