function ocultar(){
    $(document).ready(function(){$("#om").hide()});
    $(document).ready(function(){$("#om2").hide()});
}

function mostrar(){
    $(document).ready(function(){$("*#om").show()});
    $(document).ready(function(){$("*#om2").show()});
}

function modificar(){
    $(document).ready(function(){$("*#mod").append(", esto es añadido")});
    $(document).ready(function(){$("*#mod2").append(", esto es añadido")});
    $(document).ready(function(){$("*#mod3").append(", esto es añadido")});
}

function añadir(){
    $(document).ready(function(){$("h3:first").before("<h4>H4 añadido</h4>")});
    $(document).ready(function(){$("<li>Index added</li>").appendTo("ul:odd")});
}

function eliminar(){
    $(document).ready(function(){$("*h4").remove()});
    $(document).ready(function(){$("ul:odd li:last").remove()});
}

function recorrerHTML(){
    $(document).ready(function(){
        $("*").each( function(idx, el){
            $("p:last").append("Elemento: "+el.tagName+" Padre: " + $(el).parent().get(0).tagName+"<br>")
        })  
    });
}

function sumar(){
    $(document).ready(function(){
        var fila=0;
        var columna=0;
        $("table tr").each( function(idx, el){
            fila++;
        });

        $("table tr:first th").each( function(idx, el){
            columna++;
        });

        var total = fila + columna;

        $("#suma").before($("<p></p>").text("Filas: "+ fila + " Columnas: "+ columna+ " Suma: "+ total));
    });
}