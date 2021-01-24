new Vue({
    el: '#app',
    
    data () {
      return {
         title: '',
         time: 0,
          courses:[]
      }
    },
    
    computed: {
      totalTime() {
        let time = 0
        this.courses.forEach(item => {
          time += parseInt(item.time) 
        })
        return time
      }
  
    },
    
    methods: {
      addCourse(){
        this.courses.push({title: this.title, time: this.time})
        this.title = ''
        this.time = 0
      }
  
    }
  })
  