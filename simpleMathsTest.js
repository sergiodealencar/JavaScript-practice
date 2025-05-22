function checkNumber(n) {
  const result = [ ];
  result.push((n > 0), ((n % 2) === 0), (n % 10 === 0)); 
  return result; 
}

console.log(checkNumber('-1'));