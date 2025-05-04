//میانگین اعداد آرایه
function averageArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return arr.length === 0 ? 0 : sum / arr.length;
}
console.log(averageArray([10, 20, 30]));