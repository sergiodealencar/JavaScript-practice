function getPlan(startProduction, numberOfMonths, percent) {
  let i;
  let goals = [];
  let currentProduction = startProduction;

  for (i = 0; i < numberOfMonths; i++) {
     currentProduction = Math.floor(currentProduction + ((currentProduction * percent)/100));
     goals[i] = currentProduction;
  }
  return goals;
}