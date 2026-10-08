function generateRange(start, end, step = 1) {
    let result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

// Example usage:
console.log(generateRange(5, 12)); // Output: [5, 6, 7, 8, 9, 10, 11, 12]