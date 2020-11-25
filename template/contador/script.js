class Contador {
    constructor () {
        this.conteo = 0
        this.ultimaAccion = ""
    }
    setValorActual(valor){
        this.conteo = valor
    }
    incrementar(){
        this.conteo++
        this.ultimaAccion = "Incrementar"
    }
    valorActual(){
        console.log(this.conteo)
        this.ultimaAccion = "Valor actual"
    }
    decrementar(){
        this.conteo--
        this.ultimaAccion = "Decrementar"
    }
    resetear(){
        this.conteo = 0
        this.ultimaAccion = "Resetear"
    }
    getUltimoComando(){
        console.log(this.ultimaAccion)
    }

}

const contador  = new Contador ()
contador.setValorActual(10)
contador.incrementar()
contador.incrementar()
contador.getUltimoComando()
contador.decrementar()
contador.incrementar()
contador.valorActual()

