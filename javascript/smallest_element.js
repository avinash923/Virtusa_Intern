function findSmallestElement(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

// Example usage:
const nums = [42, 15, 8, 23, 4, 99];
console.log("Smallest element:", findSmallestElement(nums)); // Output: 4