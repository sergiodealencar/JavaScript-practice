let sum = 0;

function sumFromTo(min, max){
  for(let i = min; i <= max; i++){
    sum += i;
  }  
  return sum;
}

console.log(sumFromTo(5, 5));
