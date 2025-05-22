function isSubstring(phrase, part) {
    if (phrase.includes(part)) {
        return true;
    } else {
        return false;
    }
}

console.log(isSubstring('ola mano tudo bem', 'mno'));