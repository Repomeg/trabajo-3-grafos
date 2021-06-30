//Botones .HTML
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//Imagenes Automata
const imgAuPila = document.querySelector(".Au-Pila");

//Formulario Automata
const indicador = document.querySelector(".indicador");
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
let Eabc = ["λ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let abcPila = ["λ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Clase Automata
class automata{
    constructor(k,l,s,m){
        this.k = [];
        this.l = [];
        this.s = [];
        this.m = [];
    }
}

class camino{
    constructor(c,l,s,m){
        this.c = [];
        this.l = [];
        this.s = [];
        this.m = [];
    }
}

//Variables Automatas
let automataPila1 = new automata;
let caminoPila1 = new camino;

//Funciones Formulario Automata Pila
const imprimirIndicador = () => {
    for(let t=0;t<numTransacciones;t++){
        const indi = document.createElement('p');
        if(t%2==0){
            indicador.append(indi);
            indi.setAttribute('id',`p-${t}`);
            document.getElementById(`p-${t}`).innerHTML = `q${t/2} :`;
        }
        else{
            indicador.append(indi);
            indi.setAttribute('id',`p-${t}`);
            document.getElementById(`p-${t}`).innerHTML = `--> :`;
        }
    }
}

const imprimirSelectLee = () => {
    for(let i=0;i<numTransacciones;i++){
        const selNewLee = document.createElement('select');
        selInputsLee.append(selNewLee);
        selNewLee.setAttribute('name',`sel-Lee${i}`);
        selNewLee.setAttribute('id',`sel-Lee${i}`);
        selNewLee.setAttribute('class',`sel-Lee${i}`);
        //document.getElementById(`sel-Lee${i}`).style.marginBottom = '5px';
    }
    agregarOptLee();
}

const agregarOptLee = () => {
    for(let j=0;j<numTransacciones;j++){
        let $selLee = document.querySelector(`.sel-Lee${j}`);
        for(let k=0;k<=numAlfAu;k++){
            const optLee = document.createElement('option');
            optLee.value = `${Eabc[k]}`;
            optLee.text = `${Eabc[k]}`;
            $selLee.append(optLee);
        }
    }
}

const guardarSelectLee = () => {
    for(let a=0;a<numTransacciones;a++){
        let infoLee = document.getElementById(`sel-Lee${a}`).value;
        if(a%2==0){
            automataPila1.l.push(infoLee);
            automataPila1.k.push(`q${a/2}`)
        }
        else{
            caminoPila1.l.push(infoLee);
            caminoPila1.c.push(`c${Math.trunc(a/2)+1}`)
        }
    }
}

const imprimirSelectPop = () => {
    for(let q=0;q<numTransacciones;q++){
        const selNewPop = document.createElement('select');
        selInputsPop.append(selNewPop);
        selNewPop.setAttribute('name',`sel-Pop${q}`);
        selNewPop.setAttribute('id',`sel-Pop${q}`);
        selNewPop.setAttribute('class',`sel-Pop${q}`);
        //document.getElementById(`sel-Pop${q}`).style.marginBottom = '5px';
    }
    agregarOptPop();
}

const agregarOptPop = () => {
    for(let w=0;w<numTransacciones;w++){
        let $selPop = document.querySelector(`.sel-Pop${w}`);
        for(let r=0;r<=numAlfPila;r++){
            const optPop = document.createElement('option');
            optPop.value = `${abcPila[r]}`;
            optPop.text = `${abcPila[r]}`;
            $selPop.append(optPop);
        }
    }
}

const guardarSelectPop = () => {
    for(let b=0;b<numTransacciones;b++){
        let infoPop = document.getElementById(`sel-Pop${b}`).value;
        if(b%2==0){
            automataPila1.s.push(infoPop);
        }
        else{
            caminoPila1.s.push(infoPop);
        }
    }
}

const imprimirSelectPush = () => {
    for(let l=0;l<numTransacciones;l++){
        const selNewPush = document.createElement('select');
        selInputsPush.append(selNewPush);
        selNewPush.setAttribute('name',`sel-Push${l}`);
        selNewPush.setAttribute('id',`sel-Push${l}`);
        selNewPush.setAttribute('class',`sel-Push${l}`);
        //document.getElementById(`sel-Push${l}`).style.marginBottom = '5px';
    }
    agregarOptPush();
}

const agregarOptPush = () => {
    for(let m=0;m<numTransacciones;m++){
        let $selPush = document.querySelector(`.sel-Push${m}`);
        for(let n=0;n<=numAlfPila;n++){
            const optPush = document.createElement('option');
            optPush.value = `${abcPila[n]}`;
            optPush.text = `${abcPila[n]}`;
            $selPush.append(optPush);
        }
    }
}

const guardarSelectPush = () => {
    for(let c=0;c<numTransacciones;c++){
        let infoPush = document.getElementById(`sel-Push${c}`).value;
        if(c%2==0){
            automataPila1.m.push(infoPush);
        }
        else{
            caminoPila1.m.push(infoPush);
        }
    }
}

//Funcion Imagen de su automata
const crearAu = (auxAu,auxCa) => {
    Au =  JSON.parse(JSON.stringify(auxAu));
    Ca =  JSON.parse(JSON.stringify(auxCa));

    let transQs = Au.k[0]+'->'+Au.k[0]+`[label="${Au.l[0]}/${Au.s[0]}/${Au.m[0]}"]`+';';
    let caminos = Au.k[0]+'->'+Au.k[1]+`[label="${Ca.l[0]}/${Ca.s[0]}/${Ca.m[0]}"]`+';';
    let final = Number.parseInt(Au.k.length)-1;
    let fin;

    for(let z=1;z<Au.k.length;z++){
        transQs += Au.k[z]+'->'+Au.k[z]+`[label="${Au.l[z]}/${Au.s[z]}/${Au.m[z]}"]`+';';
    }

    for(let zz=1;zz<Ca.c.length;zz++){
        caminos += Au.k[zz]+'->'+Au.k[zz+1]+`[label="${Ca.l[zz]}/${Ca.s[zz]}/${Ca.m[zz]}"]`+';';
    }

    fin = 'https://quickchart.io/graphviz?graph=digraph{poi[shape=point];poi->q0[label=Inicio];'+Au.k[final]+'[shape=doublecircle];'+transQs+caminos+'}';
    console.log(fin);
    return fin;
}

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
    document.getElementById("indique").innerHTML = '<h2> Indique los elementos de sus transacciones </h2>';
    imprimirIndicador();
    imprimirSelectLee();
    imprimirSelectPop();
    imprimirSelectPush();
})

btn3.addEventListener('click', (evt) => {
    guardarSelectLee();
    guardarSelectPop();
    guardarSelectPush();

    //Automata
    console.log('INFO AUTOMATA: ');
    console.log(automataPila1.k);
    console.log(automataPila1.l);
    console.log(automataPila1.s);
    console.log(automataPila1.m);

    //Camino}
    console.log('INFO CAMINO: ');
    console.log(caminoPila1.c);
    console.log(caminoPila1.l);
    console.log(caminoPila1.s);
    console.log(caminoPila1.m);

    imgAuPila.setAttribute('src',`${crearAu(automataPila1,caminoPila1)}`);
})

