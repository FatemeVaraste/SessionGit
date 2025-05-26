const checkArrayElements = (arr) => {
    const nonNumberElement = arr.find(element => typeof element !== 'number');
    if (nonNumberElement !== undefined) {
        return `عنصر غیرعدد: ${nonNumberElement}`;
    }
    return "همه عناصر عدد هستند";
};
console.log(checkArrayElements([5, "fateme", 10, 4]));