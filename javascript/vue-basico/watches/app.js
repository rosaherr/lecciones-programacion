new Vue ({
    el: '#app',
    data(){
        return{
           
            mensaje: "hola",
            base: 0,
            altura: 0,
            area:0
        }
    },
    watch: {
        altura:function(){
            this.area= this.base*this.altura
        },
        base:function(){
            this.area= this.base*this.altura
        }

    },
    computed:{
        mensajeDeRiqueza:function(){
            if(this.area < 10000){
                return "es una quinta"
            }
            return "es un rancho"
        }
    },


    methods: {
        toggleShowPrices(){
            this.showPrices = !this.showPrices
        },
        imprimirValorDeBase(){
            console.log(this.base)
        }
        // eliminarElemento(posicion){
        //     console.log(posicion)
        //     this.pricesWithDays.splice(posicion,1)
        // }
    }
})

