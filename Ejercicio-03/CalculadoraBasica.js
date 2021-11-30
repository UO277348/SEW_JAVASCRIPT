class CalculadoraBasica {

    constructor(){
        this.pantalla = "";
        this.memoria = 0.0;
    }

    suma(){
        this.pantalla +="+";
        document.getElementById("operacion").value = this.pantalla;
    }

    resta(){
        this.pantalla +="-";
        document.getElementById("operacion").value = this.pantalla;
    }

    multiplicacion(){
        this.pantalla +="*";
        document.getElementById("operacion").value = this.pantalla;
    }

    division(){
        this.pantalla +="/";
        document.getElementById("operacion").value = this.pantalla;
    }

    mrc(){
        this.pantalla = this.memoria;
        document.getElementById("operacion").value = this.pantalla;
    }

    mMas(){
        this.memoria =eval(this.pantalla+"+"+this.memoria);
        this.pantalla = this.memoria;
        document.getElementById("operacion").value = this.pantalla;
    }

    mMenos(){
        this.memoria = eval(this.memoria +"-"+ this.pantalla);
        this.pantalla = this.memoria;
        document.getElementById("operacion").value = this.pantalla;
    }

    borrar(){
        this.pantalla ="";
        document.getElementById("operacion").value = this.pantalla;
    }

    punto(){
        this.pantalla +=".";
        document.getElementById("operacion").value = this.pantalla;
    }

    igual(){
        this.pantalla = eval(this.pantalla);
        document.getElementById("operacion").value = this.pantalla;
    }

    digitos(valor){
        this.pantalla +=new Number(valor);
        document.getElementById("operacion").value = this.pantalla;
    }

    pulsarTeclas(){
        document.addEventListener('keydown', (evento) => {
            const tecla = evento.key;
            if(tecla == '0' || tecla == '1' ||tecla == '2' ||tecla == '3' 
                ||tecla == '4' ||tecla == '5' ||tecla == '6' 
                ||tecla == '7' ||tecla == '8' || tecla == '9'){
                    this.digitos(tecla);
            }
            if(tecla == '+'){
                this.sumar();
            }
            if(tecla == '-'){
                this.restar();
            }
            if(tecla == '*'){
                this.multiplicacion();
            }
            if(tecla == '/'){
                this.division();
            }
            if(tecla == "Enter"){
                this.igual();
            }
            if(tecla == '.'){
                this.punto();
            }
            alert('keydown event\n\n' + 'key: ' + tecla)
        });
    }
}

var calculadora = new CalculadoraBasica();
calculadora.pulsarTeclas();