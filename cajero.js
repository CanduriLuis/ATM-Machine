class Billete {
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = "./img/" + v + ".jpg";
    }
}

var caja = [];
var entregar = [];
var caja_resta = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 20) );
caja.push( new Billete(10, 20) );
caja.push( new Billete(5, 20) );
caja.push( new Billete(2, 20) );
caja.push( new Billete(1, 20) );

var solicitar;
var cash = 0;
var div;


var totalEnCaja = [];
var disponible;


function sumatoria(e){
    for(var i of caja){
        calc = i.valor * i.cantidad;
        e.push(calc);
    }
}

function add(accumulator, a) {
    return accumulator + a;
}

sumatoria(totalEnCaja);
disponible = totalEnCaja.reduce(add,0);


var b = document.getElementById("solicitar");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");

function entregarDinero(){
    var t = document.getElementById("request");
    solicitar = parseInt(t.value);
    
    if(solicitar <= disponible){
        disponible = disponible - solicitar;

        for (var i of caja){
            div = Math.floor( solicitar / i.valor);
            if(div > i.cantidad) {
                cash = i.cantidad;
            } else{
                cash = div;
            }
            entregar.push( new Billete (i.valor, cash) );
            solicitar = solicitar - (i.valor * cash);
        }

    }else {
        resultado.innerHTML = "Lo siento, no puedo entregar esa cantidad </br>";
    }

    for (var e of entregar){
        if(solicitar > 0 ){
            resultado.innerHTML = "Lo siento, no puedo entregar esa cantidad </br>";
        } 
        if(e.cantidad > 0){
            resultado.appendChild(e.imagen);
            resultado.innerHTML += " x " + e.cantidad + "</br>";
        }    
    };

    transacciones.innerHTML = "Quedan " + disponible + "$ en el cajero";
    
}

function restaCaja(){
}

console.log(caja);
console.log(entregar);




