function findGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// Example usage:
console.log("GCD of 54 and 24 is:", findGCD(54, 24)); // Output: 6