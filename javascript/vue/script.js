Vue.component('nota-de-blog', {
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        plus(){
            this.counter++
        },
    },
    // 
    template: `
        <div style="width: 200px">        
            <img :src="img" style="width: 100%">
            <h3>{{ title }}</h3>
            <p>Contador {{ counter }}</p>
            <button v-on:click="plus">Sumar</button>
        </div>
    `
})


new Vue({
    el: '#app',
    data() {
        return {
            peso: 1,
            lista: [
                {
                    img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/FED1/production/_100933256_gettyimages-165964685.jpg",
                    title: "ESTA ES LA HISTORIA DE UNA NIÑA"
                },

                {
                    img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f21716c5bafe89ee2a0aa48/observar-estrellas_0.jpg",
                    title: "Mateo va a recibir varios balones de fut"
                },

                {
                    img: "https://tamtampress.files.wordpress.com/2015/08/1-estrellas-fugaces1.jpg?w=1140",
                    title: "YO comere unas galletas bien sabrosas, aunque espero que no esten quemadas jiji"
                },
            ]
            // dolar: 2,            
        }
    }, 
    created() {
        
    },
    computed: {
        statusColor: function() {
            if(this.peso < 100) return "red"            
            return "green"
        },
        mensajeDelDinero: function() {
            if(this.peso < 50) return "No puedes comprar pizza"
            else if(this.peso < 100) return "Ya puedes comprar una tlayuda pero no la pizza"
            return "Ya puedes comprar la pizza y una casa"
        },
        valorDolar: function() {
            return this.peso / 20
        }
    },
    watch: {
        // peso: function() {
        //     this.dolar = this.peso / 20
        // }
    },
    methods: { 
        restarDinero(amount) {
            this.peso -= amount
            
        },
        agregarDinero(amount) {
            this.peso += amount
        }


        
    },
})