const calculator = {
    name: 'Math',
    sum: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.name);
console.log("جمع اعداد",calculator.sum(5, 3));
console.log("تفریق اعداد",calculator.subtract(10, 4));