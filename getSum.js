function getSum(numbers) {
    let sum = 0;
  
    for (const num of numbers) {
        sum += num;
    }
  
    return sum;
  }
  
  console.log(getSum([1,2,3,4]));