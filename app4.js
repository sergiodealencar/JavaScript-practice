const idade = 19;
const dinheiro = 450;

const maiorDeIdade = idade >= 18;

console.log(maiorDeIdade);

const dinheiroSuficiente = dinheiro >= 500;

console.log(dinheiroSuficiente);

const possoTirarAcarteira = maiorDeIdade && dinheiroSuficiente;
// const possoTirarAcarteira = maiorDeIdade || dinheiroSuficiente;

console.log(possoTirarAcarteira);