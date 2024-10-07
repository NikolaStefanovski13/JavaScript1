const isEven = num => `The number is ${num % 2 === 0 ? 'even' : 'not even'}`;

const findEvenDivisible = n => {
    let result = [];
    for (let i = 10; i <= 100; i += 2) {
        if (i % n === 0) result.push(i);
    }
    return result;
};

const analyzeNumbers = numbers => {
    const smallest = Math.min(...numbers);
    const largest = Math.max(...numbers);

    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return [
        `Smallest: ${smallest}, ${isPrime(smallest) ? 'prime' : 'not prime'}`,
        `Largest: ${largest}, ${isPrime(largest) ? 'prime' : 'not prime'}`
    ];
};