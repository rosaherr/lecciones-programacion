let lista = [ "mateo", "quica hermana mala"];

let agregarTexto = (e)  => {

    e.preventDefault()
    let texto = getValueOfElementById("input1");
    cleanInputById("input1");
    lista.push(texto);
    console.log(lista);
    recorrerListaForIn();

    return false;
}


let recorrerListaForIn = () => { 
    let html_structure = "";    
    let index = 0;
    for(let texto of lista) {
        html_structure +=  '<li onclick="eliminarElemento('+ index +')">' + texto + '</li>'        
        index++;
    }
    console.log(html_structure)
    setValueInTagById(html_structure, 'list-container')    
}
let recorrerListaWhile = () => {     
    let index = 0;
    while(index < lista.length) {    
        console.log("Mi familia:", lista[index])   
        index++;        
    }
    
    // while(true) {
    //     console.log("Mi familia:", lista[index])   
    //     index++;
    //     if(index >= lista.length) {
    //         break; //Sal del bucle
    //     }
    // }
}
let recorrerListaFor = () => {    
    // let i = 0 ----------- Declaro una variable i que va ser igual a 0
    // i < lista.length ---- Mientra la variable i  sea menor a la longitud de la lista, vas a ejecutar la siguiente logica
    // i++ ----------------- Cada vez que termine la logica vamos a sumar uno a la variable i
    let html_structure = "";
    for(let i = 0; i < lista.length; i++) {
        html_structure +=  '<li>' + lista[i] + '</li>'        
    }
    setValueInTagById(html_structure, 'list-container')    
        

}


let eliminarElemento = (index) => {
    lista.splice(index, 1 );
    recorrerListaForIn ();
    console.log (lista)


}

let evento = (index) => {
    alert(lista[index])
}

// eliminarElemento(0)
// recorrerListaForIn()