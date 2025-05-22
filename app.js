let dinheiro = 13;
const coxinha = 5;
const pastel = 7;

dinheiro = dinheiro - coxinha;

console.log('Valor do meu dinheiro:',dinheiro);

const tenhoDinheiroSuficiente = dinheiro >= pastel;

console.log('Tenho dinheiro suficiente?', tenhoDinheiroSuficiente)

if (tenhoDinheiroSuficiente) {
    console.log('Posso comprar ambos! :D');
} else {
    console.log('Não posso comprar ambos! :(');
}

// boolean variable: true/false