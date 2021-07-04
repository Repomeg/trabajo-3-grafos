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
const btn8 = document.querySelector(".btn8");

//Imagenes Automata
const imgAuPila = document.querySelector(".Au-Pila");
const imgAuPilaAu2 = document.querySelector(".Au-Pila-au2");
const imgUnion = document.querySelector(".Au-Union");
const imgConca = document.querySelector(".Au-Concatenacion");

//Formulario Automata 1
const indicador = document.querySelector(".indicador");
const selInputsLee = document.querySelector(".selectLee");
const optInputsLee = document.querySelector(".optLee");
const selInputsPush = document.querySelector(".selectPush");
const optInputsPush = document.querySelector(".optPush");
const selInputsPop = document.querySelector(".selectPop");
const optInputsPop = document.querySelector(".optPop");
const checkFinal = document.querySelector(".checkFinal");

//Formulario Automata 1
const indicadorAu2 = document.querySelector(".indicador-au2");
const selInputsLeeAu2 = document.querySelector(".selectLee-au2");
const optInputsLeeAu2 = document.querySelector(".optLee-au2");
const selInputsPushAu2 = document.querySelector(".selectPush-au2");
const optInputsPushAu2 = document.querySelector(".optPush-au2");
const selInputsPopAu2 = document.querySelector(".selectPop-au2");
const optInputsPopAu2 = document.querySelector(".optPop-au2");
const checkFinalAu2 = document.querySelector(".checkFinal-au2");

//Variables Globales
let numAlfAu;
let numAlfPila;
let numEstados;
let numTransacciones;

let numAlfAu_Au2;
let numAlfPila_Au2;
let numEstados_Au2;

let matrizUnion = [];

let numTransacciones_Au2;
let Eabc = ["λ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let abcPila = ["λ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"];

//Clase Automata
class automata{
    constructor(k,l,s,m,f){
        this.k = [];
        this.l = [];
        this.s = [];
        this.m = [];
        this.f = [];
    }
}

//Clase Camino
class camino{
    constructor(c,l,s,m){
        this.c = [];
        this.l = [];
        this.s = [];
        this.m = [];
    }
}

//Variables Automatas y Caminos
let automataPila1 = new automata;
let caminoPila1 = new camino;

let automataPila2 = new automata;
let caminoPila2 = new camino;

let automataUnion = new automata;
let caminoUnion = new camino;

let automataConca = new automata;
let caminoConca = new camino;

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
        document.getElementById(`sel-Lee${i}`).style.marginBottom = '17px';
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
        document.getElementById(`sel-Pop${q}`).style.marginBottom = '17px';
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
        document.getElementById(`sel-Push${l}`).style.marginBottom = '17px';
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

const imprimirCheckFinal = () => {
    for(let po=0; po<numEstados; po++){
        const checkNewFin = document.createElement('input');
        checkFinal.append(checkNewFin);
        checkNewFin.setAttribute('type','checkbox');
        checkNewFin.setAttribute('id',`check-Fin${po}`);
        checkFinal.append(`q${po} `);
    }
}

const guardarCheckFinal = () => {
    for(let yu=0; yu<numEstados; yu++){
        let check = document.getElementById(`check-Fin${yu}`).checked;
        automataPila1.f.push(check);
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
        document.getElementById(`sel-Lee-au2-${i}`).style.marginBottom = '17px';
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
        document.getElementById(`sel-Pop-au2-${q}`).style.marginBottom = '17px';
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
        document.getElementById(`sel-Push-au2-${l}`).style.marginBottom = '17px';
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

const imprimirCheckFinalAu2 = () => {
    for(let pi=0; pi<numEstados_Au2; pi++){
        const checkNewFinAu2 = document.createElement('input');
        checkFinalAu2.append(checkNewFinAu2);
        checkNewFinAu2.setAttribute('type','checkbox');
        checkNewFinAu2.setAttribute('id',`check-Fin-au2${pi}`);
        checkFinalAu2.append(`q${pi} `);
    }
}

const guardarCheckFinalAu2 = () => {
    for(let yo=0; yo<numEstados_Au2; yo++){
        let checki = document.getElementById(`check-Fin-au2${yo}`).checked;
        automataPila2.f.push(checki)
    }
}

//Funcion Imagen de su automata Pila
const crearAuPila = (auxAu,auxCa) => {
    let Au =  JSON.parse(JSON.stringify(auxAu));
    let Ca =  JSON.parse(JSON.stringify(auxCa));

    let transQs = Au.k[0]+'->'+Au.k[0]+`[label="${Au.l[0]}/${Au.s[0]}/${Au.m[0]}"]`+';';
    let caminos = Au.k[0]+'->'+Au.k[1]+`[label="${Ca.l[0]}/${Ca.s[0]}/${Ca.m[0]}"]`+';';
    let double = '';
    let fin;

    for(let z=1;z<Au.k.length;z++){
        transQs += Au.k[z]+'->'+Au.k[z]+`[label="${Au.l[z]}/${Au.s[z]}/${Au.m[z]}"]`+';';
    }

    for(let zz=1;zz<Ca.c.length;zz++){
        caminos += Au.k[zz]+'->'+Au.k[zz+1]+`[label="${Ca.l[zz]}/${Ca.s[zz]}/${Ca.m[zz]}"]`+';';
    }

    for(let zx=0;zx<Au.k.length;zx++){
        if(Au.f[zx]==true){
            double+=`${Au.k[zx]} [shape=doublecircle];`
        }
    }

    fin = 'https://quickchart.io/graphviz?graph=digraph{poi[shape=point];poi->q0[label="Inicio"];'+double+transQs+caminos+'}';
    console.log(fin);
    return fin;
}

//Funcion Union
const union = (auxAu,auxCa,auxAu2,auxCa2) => {
    const auUnion = new automata;
    const caUnion = new camino;

    au2 = JSON.parse(JSON.stringify(auxAu2));
    ca2 = JSON.parse(JSON.stringify(auxCa2));

    let largoAu = Number.parseInt(auxAu.k.length);
    let largoCa = Number.parseInt(auxCa.c.length);

    for(let h=0;h<au2.k.length;h++){
        auUnion.l.push(au2.l[h]);
        auUnion.s.push(au2.s[h]);
        auUnion.m.push(au2.m[h]);
        auUnion.f.push(au2.f[h]);

        let aux = au2.k[h].split('');
        aux.shift();
        let val = Number.parseInt(aux.join(''));
        val=val+largoAu;

        auUnion.k.push(`q${val}`);
    }

    for(let s=0;s<ca2.c.length;s++){
        caUnion.l.push(ca2.l[s]);
        caUnion.s.push(ca2.s[s]);
        caUnion.m.push(ca2.m[s]);

        let auxi = ca2.c[s].split('');
        auxi.shift();
        let vali = Number.parseInt(auxi.join(''));
        vali=vali+largoCa;

        caUnion.c.push(`c${vali}`);
    }
    console.log(auUnion);
    console.log(caUnion);
    
    automataUnion = JSON.parse(JSON.stringify(auUnion));
    caminoUnion = JSON.parse(JSON.stringify(caUnion));
}

//Funcion Imagen de su Union
const CrearAuUnion = (auxAu,auxCa,auxAu2,auxCa2) => {
    let Au_U1 = JSON.parse(JSON.stringify(auxAu));
    let Ca_U1 =  JSON.parse(JSON.stringify(auxCa));

    let Au_U2 = JSON.parse(JSON.stringify(auxAu2));
    let Ca_U2 =  JSON.parse(JSON.stringify(auxCa2));

    let transQs_U1 = Au_U1.k[0]+'->'+Au_U1.k[0]+`[label="${Au_U1.l[0]}/${Au_U1.s[0]}/${Au_U1.m[0]}"]`+';';
    let caminos_U1 = Au_U1.k[0]+'->'+Au_U1.k[1]+`[label="${Ca_U1.l[0]}/${Ca_U1.s[0]}/${Ca_U1.m[0]}"]`+';';

    let transQs_U2 = Au_U2.k[0]+'->'+Au_U2.k[0]+`[label="${Au_U2.l[0]}/${Au_U2.s[0]}/${Au_U2.m[0]}"]`+';';
    let caminos_U2 = Au_U2.k[0]+'->'+Au_U2.k[1]+`[label="${Ca_U2.l[0]}/${Ca_U2.s[0]}/${Ca_U2.m[0]}"]`+';';

    let double = '';

    let finU;

    for(let x=1;x<Au_U1.k.length;x++){
        transQs_U1 += Au_U1.k[x]+'->'+Au_U1.k[x]+`[label="${Au_U1.l[x]}/${Au_U1.s[x]}/${Au_U1.m[x]}"]`+';';
    }
    for(let xx=1;xx<Ca_U1.c.length;xx++){
        caminos_U1 += Au_U1.k[xx]+'->'+Au_U1.k[xx+1]+`[label="${Ca_U1.l[xx]}/${Ca_U1.s[xx]}/${Ca_U1.m[xx]}"]`+';';
    }

    for(let y=1;y<Au_U2.k.length;y++){
        transQs_U2 += Au_U2.k[y]+'->'+Au_U2.k[y]+`[label="${Au_U2.l[y]}/${Au_U2.s[y]}/${Au_U2.m[y]}"]`+';';
    }
    for(let yy=1;yy<Ca_U2.c.length;yy++){
        caminos_U2 += Au_U2.k[yy]+'->'+Au_U2.k[yy+1]+`[label="${Ca_U2.l[yy]}/${Ca_U2.s[yy]}/${Ca_U2.m[yy]}"]`+';';
    }

    for(let zi=0;zi<Au_U1.k.length;zi++){
        if(Au_U1.f[zi]==true){
            double+=`${Au_U1.k[zi]} [shape=doublecircle];`;
        }
    }
    for(let zp=0;zp<Au_U2.k.length;zp++){
        if(Au_U2.f[zp]==true){
            double+=`${Au_U2.k[zp]} [shape=doublecircle];`;
        }
    }


    finU = 'https://quickchart.io/graphviz?graph=digraph{poi[shape=point];poi->qi[label="Inicio"];'+'qi->q0[label="λ/λ/λ"];qi->'+Au_U2.k[0]+'[label="λ/λ/λ"];'+double+transQs_U1+caminos_U1+transQs_U2+caminos_U2+'}';
    console.log(finU);
    return finU;
}

//Funcion Concatenacion
const concatenacion = (auxAu,auxCa,auxAu2,auxCa2) => {
    const auConca = new automata;
    const caConca = new camino;

    au2 = JSON.parse(JSON.stringify(auxAu2));
    ca2 = JSON.parse(JSON.stringify(auxCa2));

    let largoAu = Number.parseInt(auxAu.k.length);
    let largoCa = Number.parseInt(auxCa.c.length);

    for(let h=0;h<au2.k.length;h++){
        auConca.l.push(au2.l[h]);
        auConca.s.push(au2.s[h]);
        auConca.m.push(au2.m[h]);
        auConca.f.push(au2.f[h]);

        let aux = au2.k[h].split('');
        aux.shift();
        let val = Number.parseInt(aux.join(''));
        val=val+largoAu;

        auConca.k.push(`q${val+1}`);
    }

    for(let s=0;s<ca2.c.length;s++){
        caConca.l.push(ca2.l[s]);
        caConca.s.push(ca2.s[s]);
        caConca.m.push(ca2.m[s]);

        let auxi = ca2.c[s].split('');
        auxi.shift();
        let vali = Number.parseInt(auxi.join(''));
        vali=vali+largoCa;

        caConca.c.push(`c${vali}`);
    }

    console.log(auConca);
    console.log(caConca);

    automataConca = JSON.parse(JSON.stringify(auConca));
    caminoConca = JSON.parse(JSON.stringify(caConca));
}

//Funcion Imagen de su concatenacion
const crearAuConca = (auxAu,auxCa,auxAu2,auxCa2) => {
    let Au_C1 = JSON.parse(JSON.stringify(auxAu));
    let Ca_C1 =  JSON.parse(JSON.stringify(auxCa));

    let Au_C2 = JSON.parse(JSON.stringify(auxAu2));
    let Ca_C2 =  JSON.parse(JSON.stringify(auxCa2));

    let transQs_C1 = Au_C1.k[0]+'->'+Au_C1.k[0]+`[label="${Au_C1.l[0]}/${Au_C1.s[0]}/${Au_C1.m[0]}"]`+';';
    let caminos_C1 = Au_C1.k[0]+'->'+Au_C1.k[1]+`[label="${Ca_C1.l[0]}/${Ca_C1.s[0]}/${Ca_C1.m[0]}"]`+';';

    let transQs_C2 = Au_C2.k[0]+'->'+Au_C2.k[0]+`[label="${Au_C2.l[0]}/${Au_C2.s[0]}/${Au_C2.m[0]}"]`+';';
    let caminos_C2 = Au_C2.k[0]+'->'+Au_C2.k[1]+`[label="${Ca_C2.l[0]}/${Ca_C2.s[0]}/${Ca_C2.m[0]}"]`+';';

    let tena = '';
    let double = '';

    let final1 = Number.parseInt(Au_C1.k.length)-1;
    let final2 = Number.parseInt(Au_C2.k.length)-1;

    let finC;

    for(let x=1;x<Au_C1.k.length;x++){
        transQs_C1 += Au_C1.k[x]+'->'+Au_C1.k[x]+`[label="${Au_C1.l[x]}/${Au_C1.s[x]}/${Au_C1.m[x]}"]`+';';
    }
    for(let xx=1;xx<Ca_C1.c.length;xx++){
        caminos_C1 += Au_C1.k[xx]+'->'+Au_C1.k[xx+1]+`[label="${Ca_C1.l[xx]}/${Ca_C1.s[xx]}/${Ca_C1.m[xx]}"]`+';';
    }

    for(let y=1;y<Au_C2.k.length;y++){
        transQs_C2 += Au_C2.k[y]+'->'+Au_C2.k[y]+`[label="${Au_C2.l[y]}/${Au_C2.s[y]}/${Au_C2.m[y]}"]`+';';
    }
    for(let yy=1;yy<Ca_C2.c.length;yy++){
        caminos_C2 += Au_C2.k[yy]+'->'+Au_C2.k[yy+1]+`[label="${Ca_C2.l[yy]}/${Ca_C2.s[yy]}/${Ca_C2.m[yy]}"]`+';';
    }

    for(let tn=0;tn<Au_C1.k.length;tn++){
        if(Au_C1.f[tn]==true){
            tena+=Au_C1.k[tn]+'->'+`q${final1+1}[label="λ/P/λ"]`;
        }
    }


    for(let zp=0;zp<Au_C2.k.length;zp++){
        if(Au_C2.f[zp]==true){
            double+=`${Au_C2.k[zp]} [shape=doublecircle];`;
        }
    }

    finC = 'https://quickchart.io/graphviz?graph=digraph{poi[shape=point];poi->qi[label="Inicio"];'+'qi->q0[label="λ/λ/P"];'+double+transQs_C1+caminos_C1+transQs_C2+caminos_C2+tena+`q${final1+1}->${Au_C2.k[0]}[label="λ/λ/λ"]`+'}';
    console.log(finC);
    return finC;
}

//Eventos Formulario 1
btn0.addEventListener('click', (evt) => {
    numAlfAu = document.getElementById("alfabeto-au").value;

    if(numAlfAu==""){
        alert("Debe agregar un valor entre 1 y 26 primero");
        return 0;
    }
    if(numAlfAu<0){
        alert("Debe agregar un valor entre 1 y 26");
        document.getElementById("alfabeto-au").value="";
        return 0;
    }
    if(numAlfAu>26){
        alert("Debe agregar un valor entre 1 y 26"); 
        document.getElementById("alfabeto-au").value="";
        return 0;
    }

    console.log('Cant. Alfabeto Au: '+numAlfAu);
    btn0.disabled=true;
})

btn1.addEventListener('click', (evt) => {

    numAlfAu = document.getElementById("alfabeto-au").value;
    numAlfPila = document.getElementById("alfabeto-pila").value;
    if(numAlfAu==""){
        alert("Primero debe agregar el tamaño del Alfabeto para el Automata.");
        return 0;
    }
    if(numAlfPila==""){
        alert("Debe agregar un valor entre 1 y 25 primero");
        return 0;
    }
    if(numAlfPila<0){
        alert("Debe agregar un valor entre 1 y 25");
        document.getElementById("alfabeto-pila").value="";
        return 0;
    }
    if(numAlfPila>25){
        alert("Debe agregar un valor entre 1 y 25"); 
        document.getElementById("alfabeto-pila").value="";
        return 0;
    }
    btn1.disabled=true;
    console.log('Cant. Alfabeto Pila: '+numAlfPila);
})

btn2.addEventListener('click', (evt) => {
    var xy= document.getElementById("alfabeto-pila").value;
    numAlfAu = document.getElementById("alfabeto-au").value;
    numEstados = document.getElementById("num-estados").value;
    if(numAlfAu==""){
        alert("Primero debe agregar el alfabeto.");
        return 0;
    }
    if(xy==""){
        alert("Primero debe agregar el Alfabeto de la Pila");
        return 0;
    }
    if(numEstados==""){
        alert("Debe agregar un valor entre 1 y 10");
        return 0;
    }
    if(numEstados<0){
        alert("Debe agregar un valor entre 1 y 10");
        return 0;
    }
    if(numEstados>10){
        alert("Debe agregar un valor entre 1 y 10");
        return 0;
    }

    console.log('Cant. Estados: '+numEstados);
    numTransacciones = (numEstados*2)-1;
    console.log('Cant. Transacciones Totales: '+numTransacciones);
    document.getElementById("indique").innerHTML = '<h2> Indique los elementos de sus transacciones </h2>';
    imprimirIndicador();
    imprimirSelectLee();
    imprimirSelectPop();
    imprimirSelectPush();
    document.getElementById("finales").innerHTML = "Indique los estados finales de su automata";
    imprimirCheckFinal();
    btn2.disabled=true;
})

btn3.addEventListener('click', (evt) => {
var x= document.getElementById("alfabeto-au").value;
var y= document.getElementById("alfabeto-pila").value;
var z= document.getElementById("num-estados").value;
if(x==""){
    alert("Primero debe agregar un Alfabeto para el Automata");
    return 0;
}
if(y==""){
    alert("Primero debe agregar un Alfabeto para la Pila");
    return 0;
}
if(z==""){
    alert("Primero debe agregar una Cantidad de Conjuntos identificadores");
    return 0; 
}

    guardarSelectLee();
    guardarSelectPop();
    guardarSelectPush();
    guardarCheckFinal();

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

    btn3.disabled= true;
})

//Eventos Formulario 2
btn4.addEventListener('click', (evt) => {
    numAlfAu_Au2 = document.getElementById("alfabeto-au2").value;

    if(numAlfAu_Au2==""){
        alert("Debe agregar un valor entre 1 y 26 primero");
        return 0;
    }
    if(numAlfAu_Au2<0){
        alert("Debe agregar un valor entre 1 y 26");
        document.getElementById("alfabeto-au2").value="";
        return 0;
    }
    if(numAlfAu_Au2>26){
        alert("Debe agregar un valor entre 1 y 26"); 
        document.getElementById("alfabeto-au2").value="";
        return 0;
    }

    console.log('Cant. Alfabeto Au2: '+numAlfAu_Au2);
    btn4.disabled=true;
})

btn5.addEventListener('click', (evt) => {

    numAlfAu_Au2 = document.getElementById("alfabeto-au2").value;
    numAlfPila_Au2 = document.getElementById("alfabeto-pila-au2").value;
    if(numAlfAu_Au2==""){
        alert("Primero debe agregar el tamaño del Alfabeto para el Automata.");
        return 0;
    }
    if(numAlfPila_Au2==""){
        alert("Debe agregar un valor entre 1 y 25 primero");
        return 0;
    }
    if(numAlfPila_Au2<0){
        alert("Debe agregar un valor entre 1 y 25");
        document.getElementById("alfabeto-pila-au2").value="";
        return 0;
    }
    if(numAlfPila_Au2>25){
        alert("Debe agregar un valor entre 1 y 25"); 
        document.getElementById("alfabeto-pila-au2").value="";
        return 0;
    }
    btn5.disabled=true;
    console.log('Cant. Alfabeto Pila Au2: '+numAlfPila_Au2);
})

btn6.addEventListener('click', (evt) => {
    var yz=document.getElementById("alfabeto-pila-au2").value;
    numAlfAu_Au2 = document.getElementById("alfabeto-au2").value;    
    numEstados_Au2 = document.getElementById("num-estados-au2").value;
    if(numAlfAu_Au2==""){
        alert("Primero debe agregar el Alfabeto del Automata");
        return 0;
    }
    if(yz==""){
        
        alert("Primero debe agregar el Alfabeto de la Pila");
        return 0;
    }
    if(numEstados_Au2==""){
        alert("Debe agregar un valor entre 1 y 10");
        return 0;
    }
    if(numEstados_Au2<0){
        alert("Debe agregar un valor entre 1 y 10");
        return 0;
    }
    if(numEstados_Au2>10){
        alert("Debe agregar un valor entre 1 y 10");
        return 0;
    }

    console.log('Cant. Estados Au2: '+numEstados_Au2);
    numTransacciones_Au2 = (numEstados_Au2*2)-1;
    console.log('Cant. Transacciones Totales Au2: '+numTransacciones_Au2);
    document.getElementById("indique-au2").innerHTML = '<h2> Indique los elementos de sus transacciones </h2>';
    imprimirIndicadorAu2();
    imprimirSelectLeeAu2();
    imprimirSelectPopAu2();
    imprimirSelectPushAu2();
    document.getElementById("finales-au2").innerHTML = "Indique los estados finales de su automata";
    imprimirCheckFinalAu2();
    btn6.disabled=true;
})

btn7.addEventListener('click', (evt) => {
var x= document.getElementById("alfabeto-au2").value;
var y= document.getElementById("alfabeto-pila-au2").value;
var z= document.getElementById("num-estados-au2").value;
    if(x==""){
        alert("Primero debe agregar un Alfabeto para el Automata");
        return 0;
    }
    if(y==""){
        alert("Primero debe agregar un Alfabeto para la Pila");
        return 0;
    }
    if(z==""){
        alert("Primero debe agregar una Cantidad de Conjuntos identificadores");
        return 0; 
    }
    
    
        guardarSelectLeeAu2();
        guardarSelectPopAu2();
        guardarSelectPushAu2();
        guardarCheckFinalAu2();
    
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
    
        btn7.disabled= true;

})

btn8.addEventListener('click', (evt) => {
    if(automataPila1.k.length && caminoPila1.c.length > 0  ){
        
    imgAuPila.setAttribute('src',`${crearAuPila(automataPila1,caminoPila1)}`);
    imgAuPilaAu2.setAttribute('src',`${crearAuPila(automataPila2,caminoPila2)}`);

    
        union(automataPila1,caminoPila1,automataPila2,caminoPila2);
        imgUnion.setAttribute('src',`${CrearAuUnion(automataPila1,caminoPila1,automataUnion,caminoUnion)}`);
    
        concatenacion(automataPila1,caminoPila1,automataPila2,caminoPila2);
        imgConca.setAttribute('src',`${crearAuConca(automataPila1,caminoPila1,automataConca,caminoConca)}`);
    }
    else{
        alert("Primero debe agregar los 2 Automatas de Pila");
        return 0;
    }
})

