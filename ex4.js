// [Dificil]: Hay un error en este bucle. Cambía SOLAMENTE una línea para conseguir que el bucle funcione. Debería aparecer un mensaje por consola: "arepa contiene la letra p". PISTA. Usa tantos console.log como necesites para saber qué pasa dentro del bucle. Pista: haz un console.log de palabraSecreta[i] al inicio del bucle.

let encontrado = false;
let letraBuscada = "y";
let palabraSecreta = "arepa";
let i = 0;

let posicion = palabraSecreta.indexOf(letraBuscada); // -1 si no la encuentra, o será 0 o mayor si la encuentra

if (posicion != -1) {
    console.log(`${palabraSecreta} contiene la letra ${letraBuscada} y está en la posición ${posicion}`);
}

else {
    console.log(`${palabraSecreta} NO contiene la letra ${letraBuscada}`);
}

//mio 
    while (i < palabraSecreta.length-1) {
    encontrado = palabraSecreta.[i]==(letraBuscada)
    i++;
}
if (encontrado) {
    console.log(`${palabraSecreta} contiene la letra ${letraBuscada}`);
}

else {
    console.log(`${palabraSecreta} NO contiene la letra ${letraBuscada}`);
} */