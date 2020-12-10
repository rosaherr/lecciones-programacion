new Vue({
    el: '#app',
    data() {
        return {
            peso: 1,
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