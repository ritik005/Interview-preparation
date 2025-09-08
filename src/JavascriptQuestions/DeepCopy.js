function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        // it make sure an object has a property as its own (not inherited).
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

//For the purpose of user debugging.
deepClone({ a: { b: { c: 3 } } });

module.exports = deepClone;