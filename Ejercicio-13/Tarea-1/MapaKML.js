class Mapa{
  constructor(){
    this.mapa;
    this.kmlLayer;
    this.url = 'https://uo277348.github.io/SEW_PRAC3/arbolGenialogico.kml';
  }

  initMap(){
    var oviedo = {lat: 43.3672702, lng: -5.8502461};
    this.mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});

    this.kmlLayer = new google.maps.KmlLayer(this.url,
      {
        suppressInfoWindows: true,
        map: this.mapa
      }
    )

    this.kmlLayer.addListener('click',
      function(event){
        var content = event.featureData.infoWindowHtml;
        document.getElementById("info").innerHTML = content;
      });
  }
} 
var mapa = new Mapa();
mapa.initMap();