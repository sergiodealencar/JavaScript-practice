function isAlphabet(letters) {
  if (letters.length === 0) return false; // vazio = false

  let lower = letters.toLowerCase();

  for (let i = 0; i < lower.length - 1; i++) {
    let atual = lower.charCodeAt(i);
    let proximo = lower.charCodeAt(i + 1);

    if (proximo !== atual + 1) {
      return false; // pulou letra ou está fora de ordem
    }
  }

  return true; // passou por todas as verificações
}