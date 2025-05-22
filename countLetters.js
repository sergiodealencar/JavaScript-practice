function countLetters(input) {
    const onlyLetters = input.toLowerCase().replace(/[^a-z]/g, '');

    let counter = 0;

    for (const letter of onlyLetters) {
        if (onlyLetters.includes(letter)) {
            counter++;
        }
    }
return counter;

}

console.log(countLetters('one two three'));