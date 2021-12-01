class Reader{
    constructor(){
        this.tipoTexto = 'text/plain';
        this.tipoXML = 'text/xml';
        this.tipoJSON = 'application/json';
    }

    leerArchivoTexto(files) 
    { 
        var archivo = files[0];
        var areaVisualizacion = document.getElementById("areaTexto");
        var stringDatos =  "<p>Nombre del archivo: "+archivo.name +"</p>";
            stringDatos += "<p>Tamaño del archivo: " + archivo.size + " bytes"+"</p>";
            stringDatos += "<p>Tipo del archivo: " + archivo.type+"</p>";
            stringDatos += "<p>Fecha de la última modificación: " + archivo.lastModifiedDate+"</p>";
            // stringDatos += "<p>Ruta relativa: " + archivo.webkitRelativePath+"</p>"; //Esa obsoleta pero se podría poner
            stringDatos = "<h1> DATOS DEL ARCHIVO </h1>" + stringDatos;
        if (archivo.type==(this.tipoTexto) || archivo.type==(this.tipoXML) || archivo.type==(this.tipoJSON)) {
            stringDatos += "<p>Contenido del archivo de texto:"+"</p>";

            var lector = new FileReader();
            lector.onload = function (evento) {
                areaVisualizacion.innerText =  lector.result;
            }      
            lector.readAsText(archivo);
            
            document.getElementById("datos").innerHTML= stringDatos;
        }
        else {
            document.getElementById("datos").innerHTML= stringDatos;
            areaVisualizacion.innerText = "";
        }       
    };
}

var reader = new Reader();