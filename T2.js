const orders = {
    book: { name: "Book", model: "A", price: 100, count: 2 },
    pen: { name: "Pen", model: "B", price: 10, count: 2 },
    laptop: { name: "Laptop", model: "C", price: 1000, count: 2 }
};

for (const key in orders) {
    orders[key].price += 10;
}

let totalPrice = 0;
for (const key in orders) {
    totalPrice += orders[key].price * orders[key].count;
}

console.log(`Total: ${totalPrice}`);