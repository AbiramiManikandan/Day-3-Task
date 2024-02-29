function compareJSON(obj1, obj2) {
    // Check if both arguments are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    // Get the keys of the objects
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if each key in obj1 is present in obj2
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (!keys2.includes(key)) {
            return false;
        }
        // Check recursively if the values are the same
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!compareJSON(obj1[key], obj2[key])) {
                return false;
            }
        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// Example usage
const json1 = {
    "name": "Person 1",
    "age": 5
};

const json2 = {
    "age": 5,
    "name": "Person 1"
};

console.log(compareJSON(json1, json2)); // Output: true
