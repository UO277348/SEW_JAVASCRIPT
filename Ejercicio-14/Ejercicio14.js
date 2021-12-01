class Reader{
    constructor(btc){
        this.tipoTexto = 'text/plain';
        this.tipoXML = 'text/xml';
        this.tipoJSON = 'application/json';
        this.btc = btc;
    }

    loader()
		{
		var canvas = document.getElementById('canvas');
		var canvas1 = canvas.getContext('2d');

		canvas1.fillStyle = "rgba(0, 0, 255, 1)";
		canvas1.fillRect(30, 100, 50, btc.valorBTC * 0.01);
		canvas1.fillStyle = "rgba(255, 255, 0, 1)";
		canvas1.fillRect(120, 100, 50, btc.valorETH * 0.01);
		canvas1.fillStyle = "rgba(255, 0, 0, 1)";
        if(btc.valorSHIB * 0.01<1)
		    canvas1.fillRect(210, 100, 50, 1);
        else
            canvas1.fillRect(210, 100, 50, btc.valorSHIB * 0.01);

		canvas1.font = 'italic 14px sans-serif';
		canvas1.strokeStyle = "rgba(255, 255, 255, 1)";
        canvas1.textBaseline = "middle";
		canvas1.fillText("BitCoin", 30, 80);
        canvas1.fillText("Ethereum", 120, 80);
        canvas1.fillText("Shiba Inu", 210, 80);
	}

    fullscreen(){
        var element = document.getElementById('canvas');
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
}

class Bitcoin {
    constructor(moneda){
        this.apikey = "1f6f2af80b1788973427896d5f160c299a03d09f9fb98da398f52523181447a7";
        this.fromBTC = "BTC,ETH,SHIB";
        this.toCoin = moneda;
        this.url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms="+this.fromBTC+"&tsyms="+this.toCoin+"&api_key="+this.apikey;
        
        this.valorBTC = 0;
        this.valorETH = 0;
        this.valorSHIB = 0;
        
    }

    asignarPos(){
        //65.391455, -28.205150 izq EEUU, Dcha Europa
        //62.908810, 31.512216 Izq Europa, dcha ASIA
        var coin = "";
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              if(pos.long>31.512216){
                coin = "JPY";
              }
              else if(pos.long<-28.205150){
                coin = "USD";
              }
              else{
                coin = "EUR";
              }

              self.setCoin(coin);
            }, function() {
            });
        }

        
    }

    setCoin(coin){
        if(coin!=""){
            this.toCoin = coin;
            this.url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms="+this.fromBTC+"&tsyms="+this.toCoin+"&api_key="+this.apikey;
        }
    }

    cargarDatos(){
        var self = this;

        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    // $("pre").text(JSON.stringify(datos, null, 2));
                    if(self.toCoin == "EUR"){
                        self.valorBTC = datos.BTC.EUR;
                        self.valorETH = datos.ETH.EUR;
                        self.valorSHIB = datos.SHIB.EUR;
                    }
                    if(self.toCoin == "USD"){
                        self.valorBTC =datos.BTC.USD;
                        self.valorETH =datos.ETH.USD;
                        self.valorSHIB =datos.SHIB.USD;
                    }
                    if(self.toCoin == "JPY"){
                        self.valorBTC =datos.BTC.JPY;
                        self.valorETH =datos.ETH.JPY;
                        self.valorSHIB =datos.SHIB.JPY;
                    }
                },
            error:function(){
                }
        });
    }
}

var btc = new Bitcoin("USD");
var reader = new Reader(btc);