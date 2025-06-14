function makeDecision(fuelRemaining, distance, fuelConsumption) {
  let result = fuelRemaining * (100/fuelConsumption);

  if (((fuelRemaining | distance) < 0) | fuelConsumption <= 0) {
    return 'please, enter the valid data'
  } else if (result < distance) {
    return 'ask for help'
  } else if (result >= distance) {
    return 'reach gas station by themselves'
  }
}

console.log(makeDecision(2, 25, 8));

/* if (result >= distance) {
  return 'reach gas station by themselves'
} else if (result < distance) {
  return 'ask for help'
} else if ((fuelRemaining | distance) < 0) {
  return 'please, enter the valid data'
} */