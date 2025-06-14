function calculateProfit(amount, percent, period) {
    let total = amount;
    for (let i = 1; i <= period; i++) {
        total += ((total * percent)/100);
    }
    return Math.floor(total - amount);
}
