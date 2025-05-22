function getTitle(age) {
  if (age >= 18) {
    // quando age >= 18 sai da função
    return 'Adult';
  }

  // o programa chegará aqui somente se a condição age >= 18 não for atendida
  // no código a seguir, temos certeza de que age < 18
  if (age >= 10) {
    // quando age >= 10 (but < 18) sai da função
    return 'Teenager';
  }
  
  // chegamos aqui somente se não tivermos saído da função anteriormente
  // isso significa que age < 18 and age < 10
  return 'Child';
}