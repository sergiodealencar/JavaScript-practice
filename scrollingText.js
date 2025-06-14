function scrollingText(word) {
  let meuArray = [];
  let novaPalavra = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    meuArray[i] = novaPalavra;
    novaPalavra = novaPalavra.slice(1) + novaPalavra[0];
  }
  return meuArray;
}