let numero = 13;
let contador = 0;

do {
    numero = numero / 2;

    console.log(numero);

    contador++;
} while (numero % 2 === 0)

console.log(contador);