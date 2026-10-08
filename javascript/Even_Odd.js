function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(countEvenOdd(numbers)); // Output: { evenCount: 4, oddCount: 4 }