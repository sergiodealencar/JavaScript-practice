function calculateTaxes(income){
  if (income <= 1000){
    return ((2 * income)/100);
  }

  else if (income > 1000 && income <= 10000){
    return ((3 * income)/100);
  }
  else if (income > 10000){
    return ((5 * income)/100);
  }
  }

  console.log(calculateTaxes(200000));