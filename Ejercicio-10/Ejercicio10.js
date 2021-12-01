class Bitcoin {
    constructor(moneda){
        this.apikey = "1f6f2af80b1788973427896d5f160c299a03d09f9fb98da398f52523181447a7";
        this.fromBTC = "BTC";
        this.toCoin = moneda;
        this.url = "https://min-api.cryptocompare.com/data/generateAvg?fsym="+this.fromBTC+"&tsym="+this.toCoin+"&e=Kraken&api_key="+this.apikey;
        this.correcto = "¡Todo correcto! JSON recibido de <a href='https://www.cryptocompare.com'>CryptoCompare</a>"
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    // $("pre").text(JSON.stringify(datos, null, 2));
                    
                    var stringDatos = "<table>";
                        stringDatos = "<caption>Paso de " + datos.RAW.FROMSYMBOL +" a "+ datos.RAW.TOSYMBOL + "</caption>";
                        stringDatos += " <tr><th>Precio</th><th>Precio más alto en las ultimas 24h</th><th>Precio más bajo en las ultimas 24h</th></tr>";
                        stringDatos += "<tbody><tr><td>" + datos.DISPLAY.PRICE +"</td>";
                        stringDatos += "<td>" + datos.DISPLAY.HIGH24HOUR + "</td>";
                        stringDatos += "<td>" + datos.DISPLAY.LOW24HOUR + "</td></tr></tbody></table>";

                    $("p").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://www.cryptocompare.com'>CryptoCompare</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verJSON(){
            $("*h3").remove();
			// $("*h4").remove();
            // $("*pre").remove();
			$("*p").remove();
            
              this.crearElemento("h3",this.correcto,"footer"); 
            //   this.crearElemento("h4","JSON","footer");  
            //   this.crearElemento("pre","","footer");
              this.crearElemento("h3","Datos","footer");
              this.crearElemento("p","","footer");
              this.cargarDatos();
    }
}

var btcEUR = new Bitcoin("EUR");
var btcUSD = new Bitcoin("USD");
var btcJPY = new Bitcoin("JPY");
var btcGBP = new Bitcoin("GBP");