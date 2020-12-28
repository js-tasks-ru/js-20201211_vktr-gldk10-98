/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    let pathObj = path.split('.');

    return function (obj) {
        let result = obj;

        for (let i = 0; i < pathObj.length; i++) {

            if (!result[pathObj[i]]) {
                result = undefined;
                break;
            }

            result = result[pathObj[i]];
        }

        return result;
    }
}
