function removeNullUndefinedProperties(obj) {
    const cleanedObj = {};

    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            cleanedObj[key] = obj[key];
        }
    }
    return cleanedObj;
}

const sampleObject = {
    name: "Book",
    price: null,
    count: 5,
    description: undefined,
    category: "stationery"
};

const cleanedObject = removeNullUndefinedProperties(sampleObject);

console.log("Deleted Object", cleanedObject);
