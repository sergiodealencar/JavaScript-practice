const mensagem = '0123456789';

console.log(
    mensagem.substr(3, 5),
    mensagem.substring(3, 5),
    mensagem.slice(3, 5)
);

const subMensagem = mensagem.slice(1, -2);

console.log(subMensagem);