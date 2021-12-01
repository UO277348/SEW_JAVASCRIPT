var miMapa = new Object();

function crearMarker(){  
  var centro = {lat: 43.3672702, lng: -5.8502461};
  var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 8,
      center:centro,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = {lat:parseFloat(document.getElementById("lat").value), lng: parseFloat(document.getElementById("long").value)};
  new google.maps.Marker({position:marker,map:mapaGeoposicionado})
}
miMapa.crearMarker = crearMarker;
