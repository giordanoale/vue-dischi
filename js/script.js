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
        genereSort: function() {
                for (var i = 0; i < this.albums.length; i++) {
                    if (this.albums[i].genre == this.genereSel) {
                        this.albums[i].show = true;
                    } else if (this.genereSel == "All"){
                        this.albums[i].show = true;
                    } else {
                        this.albums[i].show = false;
                    }
                }
            },
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

                for (var i = 0; i < response.data.response.length; i++) {
                    this.albums[i].show = true;
                }
            });
        }
  })