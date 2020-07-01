class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo ;
        this.velocidad = velocidad ;
        this.antiguedad= antiguedad ;
    }

    aumentarVelocidad(){
        this.Velocidad += 1;
    }
    reducirVelocidad(){
        this.Velocidad -=1;
    }
}


var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Mercedes', 250, 105);
var coche3 = new Coche('Renault', 150, 2005);
var coche4 = new Coche('Audi', 400, 2018);

console.log(coche1);