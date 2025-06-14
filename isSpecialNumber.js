function isSpecialNumber(n) {
const number = n.toString();
  for (let digit of number) {
    if (digit > '5') {
      return 'NOT!!';
      } 
    }
    return 'Special!!';
  }