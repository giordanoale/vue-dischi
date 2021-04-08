var app = new Vue({
    el: '#app',
    data: {
      
    },
    methods: {

    },
    mounted: 
        function(){
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then( function(response) {
                console.log(response);
            });
        }
  })