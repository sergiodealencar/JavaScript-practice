function canTheyBook(adultsCount, childrenCount, babiesCount) {
  if (adultsCount < 1) return false; // deve haver ao menos um adulto

  // Capacidade total: até 8 adultos + 1 bebê extra
  const totalPessoas = adultsCount + childrenCount + babiesCount;
  const limite = babiesCount > 0 ? 9 : 8;
  if (totalPessoas > limite) return false;

  // Cada adulto pode: (1 criança + 1 bebê) ou (2 crianças) ou (1 bebê)
  // Total de combinações permitidas = no máximo 2 dependentes por adulto, mas não 2 bebês
  if (childrenCount > adultsCount * 2) return false; // mais de 2 crianças por adulto
  if (childrenCount + babiesCount > adultsCount * 2) return false; // mais de 2 dependentes por adulto
  if (babiesCount > adultsCount) return false; // no máximo 1 bebê por adulto

  return true;
}
