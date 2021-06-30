//Botones Au 1
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//Botones Au 2
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");

//Imagenes Automata
const imgAuPila = document.querySelector(".Au-Pila");
const imgAuPilaAu2 = document.querySelector(".Au-Pila-au2");

//Formulario Automata 1
const indicador = document.querySelector(".indicador");
const selInputsLee = document.querySelector(".selectLee");
const optInputsLee = document.querySelector(".optLee");
const selInputsPush = document.querySelector(".selectPush");
const optInputsPush = document.querySelector(".optPush");
const selInputsPop = document.querySelector(".selectPop");
const optInputsPop = document.querySelector(".optPop");

//Formulario Automata 1
const indicadorAu2 = document.querySelector(".indicador-au2");
const selInputsLeeAu2 = document.querySelector(".selectLee-au2");
const optInputsLeeAu2 = document.querySelector(".optLee-au2");
const selInputsPushAu2 = document.querySelector(".selectPush-au2");
const optInputsPushAu2 = document.querySelector(".optPush-au2");
const selInputsPopAu2 = document.querySelector(".selectPop-au2");
const optInputsPopAu2 = document.querySelector(".optPop");

//Variables Globales
let numAlfAu;
let numAlfPila;
let numEstados;
let numTransacciones;

let numAlfAu_Au2;
let numAlfPila_Au2;
let numEstados_Au2;

let numTransacciones_Au2;
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

let automataPila2 = new automata;
let caminoPila2 = new camino;

//Funciones Formulario Automata Pila 1
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

//Funciones Formulario Automata Pila 2
const imprimirIndicadorAu2 = () => {
    for(let t=0;t<numTransacciones_Au2;t++){
        const indiAu2 = document.createElement('p');
        if(t%2==0){
            indicadorAu2.append(indiAu2);
            indiAu2.setAttribute('id',`p-au2-${t}`);
            document.getElementById(`p-au2-${t}`).innerHTML = `q${t/2} :`;
        }
        else{
            indicadorAu2.append(indiAu2);
            indiAu2.setAttribute('id',`p-au2-${t}`);
            document.getElementById(`p-au2-${t}`).innerHTML = `--> :`;
        }
    }
}

const imprimirSelectLeeAu2 = () => {
    for(let i=0;i<numTransacciones_Au2;i++){
        const selNewLeeAu2 = document.createElement('select');
        selInputsLeeAu2.append(selNewLeeAu2);
        selNewLeeAu2.setAttribute('name',`sel-Lee-au2-${i}`);
        selNewLeeAu2.setAttribute('id',`sel-Lee-au2-${i}`);
        selNewLeeAu2.setAttribute('class',`sel-Lee-au2-${i}`);
        //document.getElementById(`sel-Lee${i}`).style.marginBottom = '5px';
    }
    agregarOptLeeAu2();
}

const agregarOptLeeAu2 = () => {
    for(let j=0;j<numTransacciones_Au2;j++){
        let $selLeeAu2 = document.querySelector(`.sel-Lee-au2-${j}`);
        for(let k=0;k<=numAlfAu_Au2;k++){
            const optLeeAu2 = document.createElement('option');
            optLeeAu2.value = `${Eabc[k]}`;
            optLeeAu2.text = `${Eabc[k]}`;
            $selLeeAu2.append(optLeeAu2);
        }
    }
}

const guardarSelectLeeAu2 = () => {
    for(let a=0;a<numTransacciones_Au2;a++){
        let infoLeeAu2 = document.getElementById(`sel-Lee-au2-${a}`).value;
        if(a%2==0){
            automataPila2.l.push(infoLeeAu2);
            automataPila2.k.push(`q${a/2}`)
        }
        else{
            caminoPila2.l.push(infoLeeAu2);
            caminoPila2.c.push(`c${Math.trunc(a/2)+1}`)
        }
    }
}

const imprimirSelectPopAu2 = () => {
    for(let q=0;q<numTransacciones_Au2;q++){
        const selNewPopAu2 = document.createElement('select');
        selInputsPopAu2.append(selNewPopAu2);
        selNewPopAu2.setAttribute('name',`sel-Pop-au2-${q}`);
        selNewPopAu2.setAttribute('id',`sel-Pop-au2-${q}`);
        selNewPopAu2.setAttribute('class',`sel-Pop-au2-${q}`);
        //document.getElementById(`sel-Pop${q}`).style.marginBottom = '5px';
    }
    agregarOptPopAu2();
}

const agregarOptPopAu2 = () => {
    for(let w=0;w<numTransacciones_Au2;w++){
        let $selPopAu2 = document.querySelector(`.sel-Pop-au2-${w}`);
        for(let r=0;r<=numAlfPila_Au2;r++){
            const optPopAu2 = document.createElement('option');
            optPopAu2.value = `${abcPila[r]}`;
            optPopAu2.text = `${abcPila[r]}`;
            $selPopAu2.append(optPopAu2);
        }
    }
}

const guardarSelectPopAu2 = () => {
    for(let b=0;b<numTransacciones_Au2;b++){
        let infoPopAu2 = document.getElementById(`sel-Pop-au2-${b}`).value;
        if(b%2==0){
            automataPila2.s.push(infoPopAu2);
        }
        else{
            caminoPila2.s.push(infoPopAu2);
        }
    }
}

const imprimirSelectPushAu2 = () => {
    for(let l=0;l<numTransacciones_Au2;l++){
        const selNewPushAu2 = document.createElement('select');
        selInputsPushAu2.append(selNewPushAu2);
        selNewPushAu2.setAttribute('name',`sel-Push-au2-${l}`);
        selNewPushAu2.setAttribute('id',`sel-Push-au2-${l}`);
        selNewPushAu2.setAttribute('class',`sel-Push-au2-${l}`);
        //document.getElementById(`sel-Push${l}`).style.marginBottom = '5px';
    }
    agregarOptPushAu2();
}

const agregarOptPushAu2 = () => {
    for(let m=0;m<numTransacciones_Au2;m++){
        let $selPushAu2 = document.querySelector(`.sel-Push-au2-${m}`);
        for(let n=0;n<=numAlfPila_Au2;n++){
            const optPushAu2 = document.createElement('option');
            optPushAu2.value = `${abcPila[n]}`;
            optPushAu2.text = `${abcPila[n]}`;
            $selPushAu2.append(optPushAu2);
        }
    }
}

const guardarSelectPushAu2 = () => {
    for(let c=0;c<numTransacciones_Au2;c++){
        let infoPushAu2 = document.getElementById(`sel-Push-au2-${c}`).value;
        if(c%2==0){
            automataPila2.m.push(infoPushAu2);
        }
        else{
            caminoPila2.m.push(infoPushAu2);
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
    return fin;
}

//Eventos Formulario 1
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

//Eventos Formulario 2
btn4.addEventListener('click', (evt) => {
    numAlfAu_Au2 = document.getElementById("alfabeto-au2").value;
    console.log('Cant. Alfabeto Au2: '+numAlfAu_Au2);
})

btn5.addEventListener('click', (evt) => {
    numAlfPila_Au2 = document.getElementById("alfabeto-pila-au2").value;
    console.log('Cant. Alfabeto Pila Au2: '+numAlfPila_Au2);
})

btn6.addEventListener('click', (evt) => {
    numEstados_Au2 = document.getElementById("num-estados-au2").value;
    console.log('Cant. Estados Au2: '+numEstados_Au2);
    numTransacciones_Au2 = (numEstados_Au2*2)-1;
    console.log('Cant. Transacciones Totales Au2: '+numTransacciones_Au2);
    document.getElementById("indique-au2").innerHTML = '<h2> Indique los elementos de sus transacciones </h2>';
    imprimirIndicadorAu2();
    imprimirSelectLeeAu2();
    imprimirSelectPopAu2();
    imprimirSelectPushAu2();
})

btn7.addEventListener('click', (evt) => {
    guardarSelectLeeAu2();
    guardarSelectPopAu2();
    guardarSelectPushAu2();

    //Automata
    console.log('INFO AUTOMATA 2: ');
    console.log(automataPila2.k);
    console.log(automataPila2.l);
    console.log(automataPila2.s);
    console.log(automataPila2.m);

    //Camino}
    console.log('INFO CAMINO Au 2: ');
    console.log(caminoPila2.c);
    console.log(caminoPila2.l);
    console.log(caminoPila2.s);
    console.log(caminoPila2.m);

    imgAuPilaAu2.setAttribute('src',`${crearAu(automataPila2,caminoPila2)}`);
})

