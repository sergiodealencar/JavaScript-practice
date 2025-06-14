function getGuestsCount(guestsInput) {
  const str = guestsInput;

    if (isNaN(str[0])) {
      return 'not a number';
    } else {
      let num;
      num = parseInt(str);
      return num;
    }
  }
