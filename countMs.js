function countMs(text) {
    let count = 0;
    for (const letter of text) {
        if (letter === 'm' || letter === 'M') {
            count++;
        }
    }
    return count;  
}

console.log(countMs('MfkdfmdafdasMm'));