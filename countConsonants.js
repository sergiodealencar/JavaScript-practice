function countConsonants(input) {
    const onlyLetters = input.toLowerCase().replace(/[^a-z]/g, '');
    const excluir = ['a', 'e', 'i', 'o', 'u', 'y'];

    let counter = 0;

    for (const letter of onlyLetters) {
        if (!excluir.includes(letter)) {
            counter++;
        }
    }
return counter;

}

console.log(countConsonants('one two three'));