let logicaDeReloj = () =>{
    console.log ("jjj")
    let date = new Date()
    let time = "";

    time = time + date.getHours()
    time = time + ":" + date.getMinutes()    
    time = time + ":" + date.getSeconds()
    setTextOnHtmlElementById( time, "reloj")

    let fecha = ""
    fecha = fecha + date.getDate()
    fecha = fecha + "\\" + date.getMonth()
    fecha = fecha + "//" + date.getFullYear()
    setTextOnHtmlElementById( fecha, "fecha")

}
console.log ("hola")
setInterval( logicaDeReloj, 1000)
console.log ("adios")
