Vue.component('contador',{
  props: {
    img:{
      type: String,
      required: true
    },
    title:{
      type:String,
      required: true
    },
  },
  data(){
    return{
      counter:0,
    }

  },
  methods:{
    plus(){
      this.counter++
    },

  },
  template: `
  <div>
    <p>Contador{{ counter }}</p>
    <img :src= "img">
    <p>{{ title }}</p>
    <button v-on:click="plus">Sumar</button>
  </div>
  `
}

)


new Vue ({
    el: '#app',

    data(){
        return{
            name: 'Bitcoin',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent : 10,


            color: '#f4f4f4',

            price: 8400,


            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],

            showPrices: false
        }
    },

    methods: {
        toggleShowPrices(){
            this.showPrices = !this.showPrices
        },
        // eliminarElemento(posicion){
        //     console.log(posicion)
        //     this.pricesWithDays.splice(posicion,1)
        // }
    }
})

