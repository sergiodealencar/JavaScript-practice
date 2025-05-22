const palavra = 'abcdebc';
const subPalavra = 'bc';

console.log(
    palavra.includes(subPalavra),
    palavra.indexOf(subPalavra),         // encontra apenas o primeiro 
    palavra.lastIndexOf(subPalavra),     // encontra o último
    palavra.startsWith(subPalavra),
    palavra.endsWith(subPalavra)
);