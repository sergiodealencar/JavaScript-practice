function makeAbbr(words) {
  let abbreviation = words[0];

    for (let i = 0; i < words.length; i++) {
      if (words[i] === ' ') {
        abbreviation += words[i + 1];
      }
    }
    return abbreviation.toUpperCase();

}