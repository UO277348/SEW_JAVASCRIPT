class Mapa{
    constructor(){
        mapboxgl.accessToken = 'pk.eyJ1IjoidW8yNzczNDgiLCJhIjoiY2t3aTFmbnM5MHMxYzJwcGJubGlkcHhleSJ9.jRuSTHO1nQxqVzxVsPOJ5A';

        this.map;
    }

    initMap(){
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        this.map = new mapboxgl.Map({
            container: 'mapa', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: oviedo, // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
    }

    cargarArchivo(files){
        this.initMap();

        var self = this;
        var archivo = files[0];

        var lector = new FileReader();
        lector.onload = function (evento) {
            var fichero =  lector.result;

            var gj = JSON.parse(fichero);

            for(const marker of gj.features){
                const div = document.createElement('div');
                div.className = 'marker';

                new mapboxgl.Marker(div).setLngLat(marker.geometry.coordinates).setPopup(
                    new mapboxgl.Popup({offset: 25})
                    .setHTML(
                    // "<h3>"+marker.properties.title+"</h3><p>"+marker.properties.description+"</p>"
                    `<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`
                    )
                ).addTo(self.map);
            }
        }      
        lector.readAsText(archivo); 
    }
}

var mapa = new Mapa();