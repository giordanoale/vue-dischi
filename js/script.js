var app = new Vue({
    el: '#app',
    data: {
        albums: [
            
        ],
        generi: [

        ],
        genereSel: "",
    },
    methods: {

    },
    mounted: 
        function(){
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then( (response) => {
                this.albums = response.data.response;
                for (var i = 0; i < response.data.response.length; i++) {
                    if ( !(this.generi.includes(response.data.response[i].genre))) {
                        this.generi.push(response.data.response[i].genre);
                    }
                }
            });
        }
  })