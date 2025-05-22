function getDrinks(numberOfGuests) {
  let numberOfPortions = 0;
  for (let i = 0; i <= numberOfGuests; i ++) {
    numberOfPortions += i;
  }
  return numberOfPortions;
}

console.log(getDrinks(0));