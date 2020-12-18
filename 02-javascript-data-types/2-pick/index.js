/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const arrayStrings = [...fields];
    const arr = Object.entries(obj).map(([key, value]) => [key, value]);
    const result = [];

    arrayStrings.forEach(function (el) {

        arr.forEach(function (item) {

            if (item[0] === el) {
                return result.push(item);
            }

        })

    });

    return Object.fromEntries(result);
};
