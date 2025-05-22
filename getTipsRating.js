function getTipsRating(amount) {
  if (amount > 50){
    return 'excellent';
  }
  
  else if (amount > 20){
    return 'great';
  }
  else if (amount > 10){
    return 'good';
  }
  else if (amount > 0){
    return 'poor';
  }
  else {
    return 'terrible';
  }

}

console.log(getTipsRating(11));