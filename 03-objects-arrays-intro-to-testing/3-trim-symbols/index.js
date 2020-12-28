/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    const arr = Array.from(string);
    let result = '';
    let subArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            subArray.push(arr[i]);
        } else {
            subArray.push(arr[i]);
            result += subArray.slice(0, size).join('');
            subArray = [];
        }
    }

    return result;
}
