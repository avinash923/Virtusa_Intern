function findSmallestElement(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

/*function hello(arr){
    let small=arr[0];
    for(let i=0;i<arr.length;i++){
        if(small>arr[i]){
            small=arr[i];
        }
    }
    return small;
}
*/

const nums = [42, 15, 8, 23, 4, 99];
console.log("Smallest element:", findSmallestElement(nums)); // Output: 4
cosole.log(hello(nums));
