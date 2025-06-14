function calculateGuests(guestsInput) {
  // Extrai o primeiro número (inteiro ou decimal)
  const match = guestsInput.match(/\d+(\.\d+)?/);

  if (!match) return 'not a number'; // nenhum número encontrado

  const numero = parseInt(match[0]); // pega apenas a parte inteira

  return numero === 0 ? 'not a number' : numero;
}