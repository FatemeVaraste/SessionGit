// پیدا کردن بزرگ‌ترین عدد بدون Math.max
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax([3, 9, 1, 15, 7]));