#!/usr/bin/env node

// A script to calculate basic statistics from numbers

const calculateStats = (numbers) => {
    if (numbers.length === 0) {
        return {
            count: 0,
            sum: 0,
            mean: 0,
            median: 0,
            min: 0,
            max: 0
        };
    }

    const sorted = [...numbers].sort((a, b) => a - b);
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const mean = sum / numbers.length;
    const median = numbers.length % 2 === 0
        ? (sorted[numbers.length / 2 - 1] + sorted[numbers.length / 2]) / 2
        : sorted[Math.floor(numbers.length / 2)];

    return {
        count: numbers.length,
        sum: sum,
        mean: parseFloat(mean.toFixed(2)),
        median: median,
        min: sorted[0],
        max: sorted[sorted.length - 1]
    };
};

// Get numbers from command line arguments or generate random ones
let numbers;
if (process.argv.length > 2) {
    numbers = process.argv.slice(2).map(arg => parseFloat(arg)).filter(n => !isNaN(n));
} else {
    // Generate 20 random numbers between 1 and 100
    numbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
}

const stats = calculateStats(numbers);

console.log('Numbers:', numbers);
console.log('\nStatistics:');
console.log(JSON.stringify(stats, null, 2));
