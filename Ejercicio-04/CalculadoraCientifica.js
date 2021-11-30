class CalculadoraCientifica extends CalculadoraBasica {

    constructor(){
        super();
        this.subpantalla="";
        this.n2 = 1.0;
        this.parentesisAbierto = false;
        this.lastOperando = "";
        this.lastOperandoParenAbierto = "";
    }

    elevado2(){
        this.pantalla += "^2";
        this.subpantalla+= "**2";
        document.getElementById("operacion").value = this.pantalla;
    }

    elevadoY(){
        this.pantalla += "^";
        this.subpantalla+= "**";
        document.getElementById("operacion").value = this.pantalla;
    }

    sin(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "sin("+stringParen+")";
                this.subpantalla += Math.sin(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "sin("+split[i]+")";
                this.subpantalla += Math.sin(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "sin("+split[i]+")";
                this.subpantalla += stringParen + Math.sin(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "sin("+split[i]+")";
                this.subpantalla += stringParen + Math.sin(eval(split[i]));
            }
            pA = false;
            pC = false;
        }

        this.subpantalla = this.subpantalla.replace("^", "**", "gi");
        document.getElementById("operacion").value = this.pantalla;
    }

    cos(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "cos("+stringParen+")";
                this.subpantalla += Math.cos(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "cos("+split[i]+")";
                this.subpantalla += Math.cos(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "cos("+split[i]+")";
                this.subpantalla += stringParen + Math.cos(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "cos("+split[i]+")";
                this.subpantalla += stringParen + Math.cos(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    tan(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "tan("+stringParen+")";
                this.subpantalla += Math.tan(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "tan("+split[i]+")";
                this.subpantalla += Math.tan(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "tan("+split[i]+")";
                this.subpantalla += stringParen + Math.tan(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "tan("+split[i]+")";
                this.subpantalla += stringParen + Math.tan(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    sinh(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "sinh("+stringParen+")";
                this.subpantalla += Math.sinh(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "sinh("+split[i]+")";
                this.subpantalla += Math.sinh(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "sinh("+split[i]+")";
                this.subpantalla += stringParen + Math.sinh(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "sinh("+split[i]+")";
                this.subpantalla += stringParen + Math.sinh(eval(split[i]));
            }
            pA = false;
            pC = false;
        }

        this.subpantalla = this.subpantalla.replace("^", "**", "gi");
        document.getElementById("operacion").value = this.pantalla;
    }

    cosh(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "cosh("+stringParen+")";
                this.subpantalla += Math.cosh(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "cosh("+split[i]+")";
                this.subpantalla += Math.cosh(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "cosh("+split[i]+")";
                this.subpantalla += stringParen + Math.cosh(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "cosh("+split[i]+")";
                this.subpantalla += stringParen + Math.cosh(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    tanh(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "tanh("+stringParen+")";
                this.subpantalla += Math.tanh(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "tanh("+split[i]+")";
                this.subpantalla += Math.tanh(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "tanh("+split[i]+")";
                this.subpantalla += stringParen + Math.tanh(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "tanh("+split[i]+")";
                this.subpantalla += stringParen + Math.tanh(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    raiz(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "sqrt("+stringParen+")";
                this.subpantalla += Math.sqrt(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "sqrt("+split[i]+")";
                this.subpantalla += Math.sqrt(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "sqrt("+split[i]+")";
                this.subpantalla += stringParen + Math.sqrt(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "sqrt("+split[i]+")";
                this.subpantalla += stringParen + Math.sqrt(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    base10(){
        this.pantalla += "10^";
        this.subpantalla+= "10**";
        document.getElementById("operacion").value = this.pantalla;
    }

    log(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;
                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "log("+stringParen+")";
                this.subpantalla += Math.log(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "log("+split[i]+")";
                this.subpantalla += Math.log(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "log("+split[i]+")";
                this.subpantalla += stringParen + Math.log(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "log("+split[i]+")";
                this.subpantalla += stringParen + Math.log(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    exp(){
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;

                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "exp("+stringParen+")";
                this.subpantalla += Math.exp(eval("("+stringParen+")"));
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "exp("+split[i]+")";
                this.subpantalla += Math.exp(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "exp("+split[i]+")";
                this.subpantalla += stringParen + Math.exp(eval(split[i]));
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "exp("+split[i]+")";
                this.subpantalla += stringParen + Math.exp(eval(split[i]));
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    mod(){
        this.pantalla += "%";
        this.subpantalla += "%";
        document.getElementById("operacion").value = this.pantalla;
    }
    
    cero(){
        this.pantalla = "0";
        this.subpantalla = "0";
        document.getElementById("operacion").value = this.pantalla;
        this.pantalla = "";
        this.subpantalla = "";
    }

    eliminar(){
        var split = this.pantalla.split(this.lastOperando);
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length-1;i++){
            if(i == split.length-2){
                this.pantalla += split[i];
                this.subpantalla += split[i];
            }else{
                this.pantalla += split[i] + this.lastOperando;
                this.subpantalla += split[i] + this.lastOperando;
            }
            
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    pi(){
        this.pantalla += Math.PI;
        this.subpantalla += Math.PI;
        document.getElementById("operacion").value = this.pantalla;
    }

    e(){
        this.pantalla += Math.E;
        this.subpantalla += Math.E;
        document.getElementById("operacion").value = this.pantalla;
    }

    cambiarSigno(){
        // var split = this.pantalla.split(this.lastOperando);
        // this.pantalla = "";
        // this.subpantalla = "";
        // for(var i=0;i<split.length;i++){
        //     if(i==split.length-1){
        //         this.pantalla += "(-1*"+split[i]+")";
        //         this.subpantalla += eval("(-1*"+split[i]+")");
        //     }
        //     else{
        //         this.pantalla += split[i] + this.lastOperando;
        //         this.subpantalla += split[i] + this.lastOperando;
        //     }
        // }
        // document.getElementById("operacion").value = this.pantalla;

        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;

                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += "(-1*"+split[i]+")";
                this.subpantalla += eval("(-1*"+split[i]+")");
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + "(-1*"+split[i]+")";
                this.subpantalla += eval("(-1*"+split[i]+")");
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen + "(-1*"+split[i]+")";
                this.subpantalla += stringParen + eval("(-1*"+split[i]+")");
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += "(-1*"+split[i]+")";
                this.subpantalla += stringParen + eval("(-1*"+split[i]+")");
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    fact(){
        this.n2 = 1;
        // for(var i=1;i<eval(this.pantalla);i++){
        //     this.n2 *= i;
        // }
        // this.pantalla = this.n2;
        // document.getElementById("operacion").value = this.pantalla;
        var split;
        var opUsado;
        if(this.parentesisAbierto){
            split = this.pantalla.split(this.lastOperandoParenAbierto);
            opUsado = this.lastOperandoParenAbierto;
        }
        else{
            split = this.pantalla.split(this.lastOperando);
            opUsado = this.lastOperando;
        }
        
        // var split = this.pantalla.split(this.lastOperando);
        
        var pA = false;
        var pC = false;
        var stringParen = "";
        this.pantalla = "";
        this.subpantalla = "";
        for(var i=0;i<split.length;i++){

            // this.pantalla += split[i]+"\t"; 
            var paren = split[i].split("(");
            var paren2 = split[i].split(")");

            if(paren.length == 2){
                pA = true;

                stringParen += split[i] + opUsado;
            }
            if(paren2.length == 2){
                if(pA == true)
                    stringParen = stringParen.substring(0, stringParen.length-1);
                else
                    stringParen += split[i];
                pA = false;

                pC = true;
                
            }

            if(i<split.length-1 && (pA==false && pC == false)){
                this.pantalla += split[i] + opUsado;
                this.subpantalla += split[i] + opUsado;
            }

            if(i==split.length-1 && pA == false && pC == true){
                this.pantalla += split[i]+"!";

                for(var j=1;j<eval(split[i]);j++){
                    this.n2 *= j;
                }

                this.subpantalla += this.n2;
            }
            else  if(i==split.length-1 && pA == true && pC == false) {
                this.pantalla += stringParen + split[i]+"!";;
                for(var j=1;j<eval(split[i]);j++){
                    this.n2 *= j;
                }
                this.subpantalla += this.n2;
            }
            else if(i==split.length-1 && pA == false && pC == false && stringParen != ""){
                this.pantalla += stringParen +split[i]+"!";
                for(var j=1;j<eval(split[i]);j++){
                    this.n2 *= j;
                }

                this.subpantalla += stringParen + this.n2;
            }
            else if(i==split.length-1 && pA == false && pC == false){
                this.pantalla += split[i]+"!";
                for(var j=1;j<eval(split[i]);j++){
                    this.n2 *= j;
                }

                this.subpantalla += stringParen + this.n2;
            }
            pA = false;
            pC = false;
        }
        document.getElementById("operacion").value = this.pantalla;
    }

    parentesisDcho(){
        this.parentesisAbierto = false;
        this.pantalla +=")";
        this.subpantalla +=")";
        document.getElementById("operacion").value = this.pantalla;
    }

    parentesisIzq(){
        this.parentesisAbierto = true;
        this.pantalla +="(";
        this.subpantalla += "(";
        document.getElementById("operacion").value = this.pantalla;
    }

    deg(){
        if(document.getElementById("modo").value == "GRAD")
            document.getElementById("modo").value = "DEG";

        else if(document.getElementById("modo").value == "RAD")
            document.getElementById("modo").value = "GRAD";

        
        else if(document.getElementById("modo").value == "DEG")
            document.getElementById("modo").value = "RAD";
    }

    hyp(){
        if(document.getElementById("sin").value == "sin"){
            document.getElementById("sin").value = "sinh";
            document.getElementById("cos").value = "cosh";
            document.getElementById("tan").value = "tanh";

            // document.getElementById("sin").onClick = "calculadora.sinh()";
            // document.getElementById("cos").onClick = "calculadora.cosh()";
            // document.getElementById("tan").onClick = "calculadora.tanh()";
            document.getElementById("sin").setAttribute( "onClick","calculadora.sinh()");
            document.getElementById("cos").setAttribute( "onClick","calculadora.cosh()");
            document.getElementById("tan").setAttribute( "onClick","calculadora.tanh()");
        }
        else{
            document.getElementById("sin").value = "sin";
            document.getElementById("cos").value = "cos";
            document.getElementById("tan").value = "tan";

            document.getElementById("sin").setAttribute( "onClick","calculadora.sin()");
            document.getElementById("cos").setAttribute( "onClick","calculadora.cos()");
            document.getElementById("tan").setAttribute( "onClick","calculadora.tan()");
        }
    }

    fe(){
        if(this.parentesisAbierto == false){   
            this.n2 = new Number(eval(this.subpantalla));
            var e = 0;
            if(this.n2<1){
                while(this.n2<1){
                    this.n2 = eval(this.n2+"*10");
                    e--;
                }
            }
            else{
                while(this.n2>10){
                    this.n2 = eval(this.n2+"/10");
                    e++;
                }
            }
            if(e>=0)
                this.pantalla = this.n2 + "e+"+e;
            else
            this.pantalla = this.n2 + "e"+e;
            document.getElementById("operacion").value = this.pantalla;  
        }
        // this.pantalla = "\t"+this.pantalla.length;
        // document.getElementById("operacion").value = this.pantalla;
    }

    suma(){
        if(!this.parentesisAbierto)
            this.lastOperando = "+";
        else
            this.lastOperandoParenAbierto = "+";
        super.suma();
        this.subpantalla +="+";
    }

    resta(){
        if(!this.parentesisAbierto)
            this.lastOperando = "-";
        else
            this.lastOperandoParenAbierto = "-";
        super.resta();
        this.subpantalla +="-";
    }

    multiplicacion(){
        if(!this.parentesisAbierto)
            this.lastOperando = "*";
        else
            this.lastOperandoParenAbierto = "*";
        super.multiplicacion();
        this.subpantalla +="*";
    }

    division(){
        if(!this.parentesisAbierto)
            this.lastOperando = "/";
        else
            this.lastOperandoParenAbierto = "/";
        super.division();
        this.subpantalla +="/";
    }

    borrar(){
        super.borrar();
        this.subpantalla = "";
    }

    punto(){
        super.punto();
        this.subpantalla +=".";
    }

    igual(){
        this.pantalla = this.subpantalla;
        
        super.igual();

        this.pantalla = "";
        this.subpantalla = "";
    }

    digitos(valor){
        super.digitos(valor);
        this.subpantalla += new Number(valor);
    }

    ms(){
        super.mrc();
    }

    mMas(){
        super.mMas();
    }

    mMenos(){
        super.mMenos();
    }

    mc(){
        this.memoria = 0;
    }

    mr(){
        this.pantalla = this.memoria;
        document.getElementById("operacion").value = this.pantalla;
    }

    pulsarTeclas(){
        super.pulsarTeclas();
    }
}

var calculadora = new CalculadoraCientifica();
calculadora.pulsarTeclas();
