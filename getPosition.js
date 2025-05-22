function getPosition(text, word) {
    if (text.includes(word)) {
        return text.indexOf(word);
    } else {
        return '-1';
    }
   
}

console.log(getPosition('ola gente', 'gnte'));