class CalculadoraBasica {

    constructor(){
        this.pantalla = "";
        this.pila = new Array();
        this.n1 = null;
        this.n2 = null;
        this.numero = "";
    }

    sin(){
        this.n1 = this.pila.pop();
        this.n1 = Math.sin(this.n1);
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    cos(){
        this.n1 = this.pila.pop();
        this.n1 = Math.cos(this.n1);
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    tan(){
        this.n1 = this.pila.pop();
        this.n1 = Math.tan(this.n1);
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    arcsin(){
        this.n1 = this.pila.pop();
        this.n1 = Math.asin(this.n1);
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    arccos(){
        this.n1 = this.pila.pop();
        this.n1 = Math.acos(this.n1);
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    arctan(){
        this.n1 = this.pila.pop();
        this.n1 = Math.atan(this.n1);
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    suma(){
        this.n2 = this.pila.pop();
        this.n1 = this.pila.pop();
        this.n1 = this.n1+this.n2;
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    resta(){
        this.n2 = this.pila.pop();
        this.n1 = this.pila.pop();
        this.n1 = this.n1-this.n2;
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    multiplicacion(){
        this.n2 = this.pila.pop();
        this.n1 = this.pila.pop();
        this.n1 = this.n1*this.n2;
        this.pila.push(this.n1);

        this.mostrarPila();
    }

    division(){
        this.n2 = this.pila.pop();
        this.n1 = this.pila.pop();
        this.n1 = this.n1/this.n2;
        this.pila.push(this.n1);
        
        this.mostrarPila();
    }

    punto(){
        this.pantalla +=".";
        this.numero += ".";
        document.getElementById("operacion").value = this.pantalla;
    }

    borrar(){
        this.pila = new Array();
        this.pantalla ="";
        document.getElementById("operacion").value = this.pantalla;
    }

    enter(){
        this.pila.push(new Number(this.numero));
        this.mostrarPila();
    }

    digitos(valor){
        this.pantalla += valor;
        this.numero += valor;
        document.getElementById("operacion").value = this.pantalla;
    }

    mostrarPila(){
        this.pantalla = "";
        for(var i in this.pila)
            this.pantalla += this.pila[i].toString() +"\n";
        document.getElementById("operacion").value = this.pantalla;
        this.numero = null;
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
                this.suma();
            }
            if(tecla == '-'){
                this.resta();
            }
            if(tecla == '*'){
                this.multiplicacion();
            }
            if(tecla == '/'){
                this.division();
            }
            if(tecla == "Enter"){
                this.enter();
            }
            if(tecla == '.'){
                this.punto();
            }
        });
    }

}

var calculadora = new CalculadoraBasica();
calculadora.pulsarTeclas();