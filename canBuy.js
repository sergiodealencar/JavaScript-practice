function canBuyBeer(age){
  if (age < 18){
    return 'You can not buy beer';
  }

  else {
    return 'You can buy beer';
  }
}

console.log(canBuyBeer(17));