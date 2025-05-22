function getDrinksWithStep(numberOfGuests, step) {
  let numberOfPortions = 0;

  for (let i = 1; i <= numberOfGuests; i = i + step) {
    numberOfPortions += i;
  }
  return numberOfPortions;
}

console.log(getDrinksWithStep(0, 5));