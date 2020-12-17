/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const newArray = arr.slice();
    
    newArray.sort(function (a, b) {

        if (a.toLowerCase() === b.toLowerCase()) {
            return -1;;
        }

        return a.localeCompare(b, 'ru')
    });

    if (param === 'desc') return newArray.reverse();

    return newArray;
}
