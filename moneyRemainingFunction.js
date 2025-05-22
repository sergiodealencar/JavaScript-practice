function getMoneyRemaining(bankAccount, banknoteDenomination="100"){
    return (bankAccount % banknoteDenomination);
}

console.log(getMoneyRemaining(1473, 20));
console.log(getMoneyRemaining(1250, 50));
console.log(getMoneyRemaining(534));