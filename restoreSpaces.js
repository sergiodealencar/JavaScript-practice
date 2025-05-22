function restoreSpaces(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '-') {
            result = result + ' ';
        } else {
            result = result + input[i];
        }
        
    }
    return result
}

console.log(restoreSpaces('-a----b-'));