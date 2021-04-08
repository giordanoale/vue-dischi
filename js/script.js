var app = new Vue({
    el: '#app',
    data: {
        albums: [
            {
                poster: "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
                title: "New Jersey",
                author: "Bon Jovi",
                genre: "Rock",
                year: "1988"
            },
            {
                poster: "https://img.discogs.com/vknPDdrqRbT92pNRX0W4I5N91jg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1246953-1448927086-6590.jpeg.jpg",
                title: "Live at Wembley 86",
                author: "Queen",
                genre: "Pop",
                year: "1992"
            },
        ],
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