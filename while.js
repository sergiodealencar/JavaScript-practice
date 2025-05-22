let numero = 3;
let contador = 0;

while (numero % 2 === 0) {
    numero = numero / 2;

    console.log(numero);

    contador++;
}

console.log(contador);