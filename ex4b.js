// [Dificil]: Hay un error en este bucle. Cambía SOLAMENTE una línea para conseguir que el bucle funcione. Debería aparecer un mensaje por consola: "arepa contiene la letra p". PISTA. Usa tantos console.log como necesites para saber qué pasa dentro del bucle. Pista: haz un console.log de palabraSecreta[i] al inicio del bucle.

let encontrado = false; // indica si ya hemos encontrado la letraBuscada dentro de palabraSecreta
let letraBuscada = "a";
let palabraSecreta = "arepa";
let i = 0;

//Otra forma

// Voy a recorrer 'palabraSecreta' , letra a letra
// Voy a ver si cada letra es igual a 'letraBuscada'
// Si encuentro una letra que es la misma que 'letraBuscada' puedo decir que dicha letra se encuentra en 'palabraSecreta'

//si no hemos encontrado e i es mas pq q palabra.length

while (!encontrado && i < palabraSecreta.length) {
    let siguienteLetra = palabraSecreta[i];

    console.log(siguienteLetra);

    if (siguienteLetra == letraBuscada) {
        console.log("He encontrado la letra que estabas buscando!");
        encontrado = true;
    }

    i++;
}

if (encontrado) {
    console.log(`${palabraSecreta} contiene la letra ${letraBuscada}`);
}

else {
    console.log(`${palabraSecreta} NO contiene la letra ${letraBuscada}`);
}