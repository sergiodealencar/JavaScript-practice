function getSpeedStatistic(testResults) {
  let min = testResults[0];
  let max = testResults[0];
  let sum = 0;

  if (testResults.length === 0) {
    return [0, 0, 0];
  }

  for (let speed of testResults) {
    if (speed > max) {
      max = speed;
    } 
    
    if (speed < min) {
      min = speed;
    }

    sum += speed;
  }
  return [min, max, Math.floor(sum/(testResults.length))];
}

