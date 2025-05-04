//ادغام ساده‌ی دو آبجکت
function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}
const obj1 = { name: "Ali", age: 25 };
const obj2 = { city: "Tehran", age: 30 };
console.log(mergeObjects(obj1, obj2));