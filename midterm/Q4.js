function Sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + Sum(n - 1);
}
console.log(Sum(20));
