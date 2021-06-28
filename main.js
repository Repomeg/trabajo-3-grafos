//Botones.HTML
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

//Document .html
const txtNumInput = document.getElementsByName("num-input");

//Imagenes AFD
const imgAuAfd = document.querySelector(".Au-AFD");
const imgPaso1 = document.querySelector(".Au-Paso1");

//Divs Automata
const divInputsQ = document.querySelector(".inputsQ");
const divInputsAlf = document.querySelector(".inputsAlf");
const divInputsSel = document.querySelector(".selectRec");
const divInputsOpt = document.querySelector(".optionRec");
const divInputCheck = document.querySelector(".inputsCheck");
const divInputRad = document.querySelector(".inputsRad");

//Variables globales
let numAlf;
let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Clase Automata
class automata{
    constructor(k,s,g,f,qf,i,l){
        this.k = [];
        this.s = [];
        this.g = [];
        this.f = [];
        this.qf = [];
    }
}

//Variable automata
let automataAFD = new automata;

//Nuevo Automata Inicial y Final
let automataP1 = new automata;

//Funciones Formulario Automata AFD
const imprimirInputsQ = () => {
    const valorInput = txtNumInput[0].value;

    for (let i = 0; i < valorInput*numAlf; i++) {
        const inputNewQ = document.createElement('input');
        divInputsQ.append(inputNewQ);
        inputNewQ.setAttribute('name', `q${i/numAlf}${abc[i%numAlf]}`); 
        inputNewQ.setAttribute('value',`q${Math.trunc(i/numAlf)}`);
        inputNewQ.setAttribute('disabled','');
        console.log(`q${Math.trunc(i/numAlf)}${abc[i%numAlf]}`);
    }
}

const guardarQs = () => {
    const vInput = txtNumInput[0].value;
    
    for(let w=0;w<vInput*numAlf;w++){
        let vQ = `q${Math.trunc(w/numAlf)}`;
        automataAFD.k.push(vQ);
    }
    console.log(automataAFD.k);
}

const imprimirInputsAlf = () => {
    const valorALf = txtNumInput[0].value;

    for(let j=0;j<valorALf*numAlf;j++){
        const inputNewAlf = document.createElement('input');
        divInputsAlf.append(inputNewAlf);
        inputNewAlf.setAttribute('name', `alf${j}`);
        inputNewAlf.setAttribute('value',`${abc[j%numAlf]}`);
        inputNewAlf.setAttribute('disabled','');
    }
}

const guardarAlf = () => {
    const vAlf = txtNumInput[0].value;

    for(let r=0;r<vAlf*numAlf;r++){
        let alfi = `${abc[r%numAlf]}`;
        automataAFD.s.push(alfi);
    }
    console.log(automataAFD.s);
}

const imprimirSelectRec = () => {
    const valorSel = txtNumInput[0].value;

    for(let k=0;k<valorSel*numAlf;k++){
        const selNewRec = document.createElement('select');
        divInputsSel.append(selNewRec);
        selNewRec.setAttribute('name',`sel${k}`);
        selNewRec.setAttribute('id',`sel${k}`);
        selNewRec.setAttribute('class',`sel${k}`);
        document.getElementById(`sel${k}`).style.marginBottom = '5px';
    }
    agregarOptions();
}

const agregarOptions = () => {
    const valorOp = txtNumInput[0].value;
    
    for(let l=0;l<valorOp*numAlf;l++){
        let $select = document.querySelector(`.sel${l}`);
        for(let p=0;p<valorOp;p++){
            const opti = document.createElement('option');
            opti.value =`q${p%valorOp}`;
            opti.text = `q${p%valorOp}`;
            $select.append(opti);
        }
    }
}

const guardarSelec = () => {
    const vSel = txtNumInput[0].value;

    for(let s=0;s<vSel*numAlf;s++){
        let infoSel = document.getElementById(`sel${s}`).value;
        automataAFD.g.push(infoSel);
    }
    console.log(automataAFD.g);
}

const agregarCheck = () => {
    const valorCheck = txtNumInput[0].value;

    for(let n=0;n<valorCheck;n++){
        const inputNewCheck = document.createElement('input');
        divInputCheck.append(inputNewCheck);
        inputNewCheck.setAttribute('type','checkbox');
        inputNewCheck.setAttribute('id',`f${n}`);
        inputNewCheck.setAttribute('name',`f${n}`);
        divInputCheck.append(`q${n}  `);
    }
}

const guardarCheck = () => {
    const vCheck = txtNumInput[0].value;

    for(let c=0;c<vCheck;c++){
        let checki = document.getElementById(`f${c}`).checked;
        automataAFD.f.push(checki);
        automataAFD.qf.push(`q${c}`);
    }
    console.log(automataAFD.f);
}

const agregarRad = () => {
    const valorRad = txtNumInput[0].value;

    for(let aa=0;aa<valorRad;aa++){
        const inputNewRad = document.createElement('input');
        divInputRad.append(inputNewRad);
        inputNewRad.setAttribute('type','radio');
        inputNewRad.setAttribute('class','ini');
        inputNewRad.setAttribute('value',`${aa}`);
        inputNewRad.setAttribute('name','ini');
        inputNewRad.setAttribute('checked','true');
        divInputRad.append(`q${aa}  `);
    }
}

const guardarRad = () => {
    let inici =  document.querySelector('input[name=ini]:checked').value;
    automataAFD.i = inici;
    console.log('Estado Inicial: q'+automataAFD.i);
}

//Funcion Imagen del Automata
const crearAu = (Qs_aux,Trans_aux,Alf_aux,Qfinale_aux,Finale_aux,Inicio_aux) => {
    let direccionQ = Qs_aux[0]+'->'+Trans_aux[0]+`[label="${Alf_aux[0]}"]`+';';
    let double='';
    let point=`poi->q${Inicio_aux}`+' [color=dodgerblue,style=dotted] ;';
    let poi=`poi[shape=point]`;
    let fin;

    for(let z=0;z<Finale_aux.length;z++){
        if(Finale_aux[z]==true){
            double+=`${Qfinale_aux[z]} [shape=doublecircle];`;
        }
    }
    console.log(double);

    for(let b =1; b < Qs_aux.length; b++){
        direccionQ+=Qs_aux[b]+'->'+Trans_aux[b]+`[label="${Alf_aux[b]}"]`+';';
    }
    fin = 'https://quickchart.io/graphviz?graph=digraph{'+poi+point+double+direccionQ+'}';
    return fin;
}

const newAutomata = (aux1) => {
    automataP1 = JSON.parse(JSON.stringify(automataAFD));
    
    automataP1.k.push('qi');
    automataP1.s.push('E');
    automataP1.g.push(`q${aux1.i}`);
    automataP1.f.push(false);
    automataP1.qf.push('qi');
    automataP1.i='i';
    
    for(let i=0;i<aux1.f.length;i++){
        if(aux1.f[i]==true){
            automataP1.f[i]=false;
            automataP1.k.push(aux1.qf[i]);
            automataP1.s.push('E');
            automataP1.g.push('qf');
        }
    }
    automataP1.f.push(true);
    automataP1.qf.push('qf');
    console.log(automataP1);
}

//Eventos
btn0.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    console.log(numAlf);
});

//Botones Automata AFD
btn1.addEventListener('click', (evt) => {
    document.getElementById("indique").innerHTML = '<h3> Indique las transacciones </h3>'
    imprimirInputsQ();
    imprimirInputsAlf();
    imprimirSelectRec();
    document.getElementById("inicial").innerHTML = 'Seleccione su estado inicial';
    agregarRad();
    document.getElementById("finales").innerHTML = 'Seleccione sus estados finales';
    agregarCheck();
});

btn2.addEventListener('click', (evt) => {
    guardarQs();
    guardarAlf();
    guardarSelec();
    guardarCheck();
    guardarRad();
    imgAuAfd.setAttribute('src',`${crearAu(automataAFD.k,automataAFD.g,automataAFD.s,automataAFD.qf,automataAFD.f,automataAFD.i)}`);
    newAutomata(automataAFD);
    imgPaso1.setAttribute('src',`${crearAu(automataP1.k,automataP1.g,automataP1.s,automataP1.qf,automataP1.f,automataP1.i)}`);
    console.log(automataAFD);
});



function llenarLEN() {
    var leEntrada = document.getElementById("alfabeto").value;
    var arraylenguaje = [];

       
    
      

        
        return ArrayDefinitivo;
    }
function ER() {
    var ArrayDefinitivo = [];
    var lenguaje = automataAFD.s;
    var conjunto = automataAFD.k;
    var transicion = automataAFD.g;
    var conjunto1 = automataAFD.qf;
    var Er = "No hay ER que lo defina";
    console.log("valores a trabajar =", conjunto, lenguaje, transicion);
    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] === transicion[i]) {
            transicion[i] = "*";
            console.log(i, " = ", transicion[i]);
        }
    }

    for(let contador=0;contador<numAlf;contador++){
        ArrayDefinitivo.push(abc[contador]);
    }

    for (let i = 0; i < conjunto1.length; i++) {
        for (let j = 0; j < transicion.length; j++) {
            if (conjunto1[i] === transicion[j]) {
                var NuevosLenguaje = [];
                var NuevasSalidas = [];
                let p =  ArrayDefinitivo.length;
                while (p > 0) {
                    for (let m = 0; m < conjunto.length; m++) {
                        console.log("Transicion que ingresa = ", transicion[m]);
                        if (conjunto[m] === conjunto1[i]) {
                            if (transicion[m] === "*") {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push(transicion[m]);
                                p--;
                            } else if (transicion[m].length > 2) {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push(transicion[m]);
                                p--;
                            } else {
                                NuevosLenguaje.push(lenguaje[m]);
                                NuevasSalidas.push("*");
                                p--;
                            }
                        }
                    }
                }
                transicion[j] = "";
                for (let h = 0; h < NuevosLenguaje.length; h++) {
                    transicion[j] = transicion[j] + NuevosLenguaje[h] + NuevasSalidas[h];
                    console.log(transicion[j].split("").sort());
                    console.log("Valores = ", transicion[j]);
                    Er = transicion[j];
                }
            }
        }
    }
    return Er;


}

function imprimirEr() {
    var expresion = ER();
    const output1 = document.querySelector("#LenguajeAsociado1");
    const output2 = document.querySelector("#LenguajeAsociado2");
    output1.textContent = (`Expresion regular del Automata`);
    output1.className = "mb-3 pt-4";
    output2.textContent = (`Er = [${expresion}]`);
    output2.className = "mb-4 pb-4";
}