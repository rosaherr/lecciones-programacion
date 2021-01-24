
class Golondrina {
    constructor (){
        this.energia = 0
    } 
    getEnergia () {  
        this.energia
        console.log(this.energia)
    }
    comer (gramos) {
        this.energia += gramos * 4
    }
    volar (km) {
        this.energia -= km + 10
    }
    triste () {
        if (this.energia< 50) {
            console.log('esta triste :(')
        }
    }
    feliz (){
        if(this.energia > 500 && this.energia < 1000 ) {
            console.log ('esta feliz :)')
        }
    }

}

const golondrina = new Golondrina
golondrina.comer(100)
golondrina.volar(10)
golondrina.volar(20)
golondrina.getEnergia()
golondrina.energia = 999
golondrina.triste()
golondrina.feliz()