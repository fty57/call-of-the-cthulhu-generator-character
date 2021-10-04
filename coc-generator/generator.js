
// GERADOR DE ATRIBUTOS
var a_for = getRandom(35,80);
var a_con = getRandom(35,80);
var a_tam = getRandom(40,80);
var a_des = getRandom(35,80);
var a_apa = getRandom(35,80);
var a_int = getRandom(40,80);
var a_pod = getRandom(35,80);
var a_edu = getRandom(35,80);
var a_mov = getMovPt(a_for,a_des,a_tam);
var a_hp  = getVidaPt(a_tam, a_con);
var a_san = getSanidadePt(a_pod);
var a_mag = getMagiaPt(a_pod);
var a_sorte = getRandom(35,80);
var a_danoExtra = getDanoExtra(a_for, a_tam);
var a_esq = getMetades(a_des).toFixed(0);


console.log(`FOR: ${a_for} | DES: ${a_des} | INT: ${a_int}`);
console.log(`CON: ${a_con} | APA: ${a_apa} | POD: ${a_pod}`);
console.log(`TAM: ${a_tam} | EDU: ${a_edu} | MOV: 0${a_mov}`);
console.log(`HPT: ${a_hp} | SOR: ${a_sorte} | SAN: ${a_san} | MPT: ${a_mag} | ESQ: ${a_esq}`);
console.log(`DAN: ${a_danoExtra}`)


function getRandom(min, max) {
    var num = Math.floor(Math.random() * (max - min) + min);
    return num;
}

function getMetades(num) {
    return num / 2;
}

function getQuintos(num) {
    return num / 5;
}

function getSanidadePt(num) {
    return num;
}

function getMagiaPt(num) {
    return getQuintos(num).toFixed(0);
}

function getVidaPt(n_tam, n_con) {
    var sumTamCon = n_tam + n_con;
    return (sumTamCon / 10).toFixed(0);
}

function getMovPt(n_for, n_des, n_tam) {
    if(n_des < n_tam && n_for < n_tam) {
        return 7;
    }else if(n_for >= n_tam || n_des >= n_tam || n_des == n_for == n_tam){
        return 8;
    }else{
        return 9;
    }
}

function getDanoExtra(n_for, n_tam) {
    var sumForTam = n_for + n_tam;
    var danoExtra = null;
    //var corpo = 0;
    if((2 < sumForTam) && (sumForTam < 64)){
        danoExtra = -2;
    }else if((65 < sumForTam) && (sumForTam < 84)){
        danoExtra = - 1;
    }else if((85 < sumForTam) && (sumForTam < 124)){
        danoExtra = 0;
    }else if((125 < sumForTam) && (sumForTam < 164)){
        danoExtra = "1D4";
    }else if((165 < sumForTam) && (sumForTam < 204)){
        danoExtra = "1D6"
    }else if((205 < sumForTam) && (sumForTam < 284)){
        danoExtra = "2D6"
    }else if((285 < sumForTam) && (sumForTam < 364)){
        danoExtra = "3D6"
    }else if((365 < sumForTam) && (sumForTam < 444)){
        danoExtra = "4D6"
    }else if((445 < sumForTam) && (sumForTam < 524)){
        danoExtra = "5D6"
    }
    return danoExtra;
}

