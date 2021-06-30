//Botones .HTML
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//Imagenes Automata
const imgAuPila = document.querySelector(".Au-Pila");

//Formulario Automata
const selInputsLee = document.querySelector(".selectLee");
const optInputsLee = document.querySelector(".optLee");
const selInputsPush = document.querySelector(".selectPush");
const optInputsPush = document.querySelector(".optPush");
const selInputsPop = document.querySelector(".selectPop");
const optInputsPop = document.querySelector(".optPop");

//Variables Globales
let numAlfAu;
let numAlfPila;
let numEstados;
let numTransacciones;
let Eabc = ["E","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Clase Automata
class automata{
    constructor(k,s,g,f,qf,i){
        this.k = [];
        this.s = [];
        this.g = [];
        this.f = [];
        this.qf = [];
    }
}

//Variables Automatas
let automataPila1 = new automata;

//Funciones Formulario Automata Pila
const imprimirSelectLee = () => {
    for(let i=0;i<numTransacciones;i++){
        const selNewLee = document.createElement('select');
        selNewLee.setAttribute('name',`sel-Lee${i}`);
        selNewLee.setAttribute('id',`sel-Lee${i}`);
        selNewLee.setAttribute('class',`sel-Lee${i}`);
        document.getElementById(`sel-Lee${i}`).style.marginBottom = '5px';
    }
    agregarOptLee();
}

const agregarOptLee = () => {
    
}

//Funcion Imagen de su automata

//Eventos
btn0.addEventListener('click', (evt) => {
    numAlfAu = document.getElementById("alfabeto-au").value;
    console.log('Cant. Alfabeto Au: '+numAlfAu);
})

btn1.addEventListener('click', (evt) => {
    numAlfPila = document.getElementById("alfabeto-pila").value;
    console.log('Cant. Alfabeto Pila: '+numAlfPila);
})

btn2.addEventListener('click', (evt) => {
    numEstados = document.getElementById("num-estados").value;
    console.log('Cant. Estados: '+numEstados);
    numTransacciones = (numEstados*2)-1;
    console.log('Cant. Transacciones Totales: '+numTransacciones);
    document.getElementById("indique").innerHTML = '<h3> Indique los elementos de sus transacciones </h3>';

})

