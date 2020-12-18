/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const arrayStrings = [...fields];
    const arr = Object.entries(obj).map(([key, value]) => [key, value]);

    arrayStrings.forEach(function (el) {

        arr.forEach(function (item, index) {

            if (item[0] === el) {

                arr.splice(index, 1);

            }

        })

    })

    return Object.fromEntries(arr);
};
