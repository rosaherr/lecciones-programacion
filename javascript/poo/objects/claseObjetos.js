const rosa = {
    nombre: "rosa",
    apellido: "Herrera",
    edad: "16",
    lugarDeNacimiento: 'Saltillo, Coahuila',
    colorDeCabello: "cafe",
    peso: 20,
    cocinar: function(){
        console.log( this.nombre + ' cocina')
    },
    correr: function() {
        console.log( this.nombre + " corre")
    },
    comer: function(gramos){
        this.peso += gramos / 1000
    }


}
rosa.comer(40)
console.log(rosa.peso)
rosa.cocinar()
rosa.correr()
rosa.nombre = "olivia"
rosa.cocinar()
rosa.correr()
// console.log(rosa.colorDeCabello)
// let mensaje = 'La persona' + rosa.nombre + " " + rosa.apellido + " " + "tiene" + " " + rosa.edad + " " + "y nacio en " + " " + rosa.lugarDeNacimiento