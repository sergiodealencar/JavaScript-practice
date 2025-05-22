function fazerBolo(numeroDePorcoes, sabor){
    const bolo = `Bolo de ${sabor} para ${numeroDePorcoes} pessoas.`;

    return bolo;
}

const boloPequeno = fazerBolo(4, 'cenoura');
const boloGrande = fazerBolo(12, 'chocolate');

console.log(boloPequeno);
console.log(boloGrande);

