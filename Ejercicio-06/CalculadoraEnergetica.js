class CalculadoraEnergetica extends CalculadoraBasica {

    constructor(){
        super();
        this.unidades = "w";
    }

    watio(){

        if(this.unidades == "kWh"){
            this.unidades="w";
            this.n1 = this.pila.pop();
            this.n1 = this.n1*1000;

            this.pila.push(this.n1);
        }
        this.pantalla = "";
        this.pantalla += this.pila[0].toString() +" w";
        document.getElementById("operacion").value = this.pantalla;
    }

    kwatio(){
        if(this.unidades == "w"){
            this.unidades="kWh";
            this.n1 = this.pila.pop();
            this.n1 = this.n1/1000;

            this.pila.push(this.n1);
        }
        this.pantalla = "";
        this.pantalla += this.pila[0].toString() +" kWh";
        document.getElementById("operacion").value = this.pantalla;
    }

    consumoDiario(){
        this.n1 = this.pila.pop();
        this.n1 = this.n1 * 24;

        this.pila.push(this.n1);

        this.pantalla = "";
        this.pantalla += this.pila[0].toString() + this.unidades+"/dia";
        document.getElementById("operacion").value = this.pantalla;
    }

    consumoMensual(){
        this.n1 = this.pila.pop();
        this.n1 = this.n1 * 30;

        this.pila.push(this.n1);

        this.pantalla = "";
        this.pantalla += this.pila[0].toString() + this.unidades+"/mes";
        document.getElementById("operacion").value = this.pantalla;
    }

    coste(){
        this.n1 = this.pila.pop();
        if(this.unidades == "w"){
            this.n1 = this.n1 * 0.1214 * 1000;

            this.pila.push(this.n1);
        }
        else if(this.unidades == "kWh"){
            this.n1 = this.n1 * 0.1214;

            this.pila.push(this.n1);
        }
       

        this.pantalla = "";
        this.pantalla += this.pila[0].toString() +"€";
        document.getElementById("operacion").value = this.pantalla;
    }

    costeVivienda(){
        //291 kWh 0,1214 €/kWh.

        var precio = 291 * 0.1214;

        this.pantalla = "";
        this.pantalla += precio +"€";
        document.getElementById("operacion").value = this.pantalla;
    }

    costeEdificio(){
        //186 kWh
        var precio = 186 * 0.1214;

        this.pantalla = "";
        this.pantalla += precio +"€";
        document.getElementById("operacion").value = this.pantalla;
    }

    costeFabrica(){
        //470 kWh
        var precio = 470 * 0.0943;

        this.pantalla = "";
        this.pantalla += precio +"€";
        document.getElementById("operacion").value = this.pantalla;
    }

    dividir(){
        super.dividir();
    }

    multiplicar(){
        super.multiplicar();
    }

    restar(){
        super.restar();
    }

    sumar(){
        super.sumar();
    }

    punto(){
        super.punto();
    }

    borrar(){
        super.borrar();
    }

    enter(){
        super.enter();
    }

    digitos(valor){
        super.digitos(valor);
    }

    mostrarPila(){
        super.mostrarPila();
    }

    pulsarTeclas(){
        super.pulsarTeclas();
    }
}

var calculadora = new CalculadoraEnergetica();
calculadora.pulsarTeclas();