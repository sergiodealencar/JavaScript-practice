function getLargestNumber(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let maxNumber = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if ((numbers[i]) > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    
    return maxNumber;
}

console.log(getLargestNumber([23,,3,5,67,7,8]))