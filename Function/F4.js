// جابه‌جایی کلیدها و مقادیر آبجکت
function invertObject(obj) {
    const result = {};
    for (let key in obj) {
        result[obj[key]] = key;
    }
    return result;
}
const originalObj = { a: 1, b: 2, c: 3 };
console.log(invertObject(originalObj));
