function isTidy(n) {
  const number = n.toString();
  let atual = number[0];

  for (let digit of number) {
    if (digit < atual) {
      return false;
    } else {
      atual = digit;
    }
  }
  return true;
}