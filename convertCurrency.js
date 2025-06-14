function convertCurrency(amount, exchangeRate, currencyName) {
  if (amount > 0 && exchangeRate > 0) {
    return `Give them ${parseFloat((amount * exchangeRate).toFixed(2))} ${currencyName}(s)`;
  } else {
    return 'Enter valid data';
    }    
  }