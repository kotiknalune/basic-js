module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw Error();

    let transformedArray = [],
        control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    for (var i = 0; i < arr.length; i++)

    if (arr[i] == control[0] && i < arr.length - 1) {
        i += 1;
    } else if (arr[i] == control[1] && i > 0) {
        transformedArray.pop();
    } else if (arr[i] == control[2] && i < arr.length - 1) {
        transformedArray.push(arr[i + 1]);
    } else if (arr[i] == control[3] && i > 0) {
        transformedArray.push(arr[i - 1]);
    } else if (arr[i] != control[1] &&
        arr[i] != control[3] &&
        arr[i] != control[2] &&
        arr[i] != control[0]) {

        transformedArray.push(arr[i]);
    }
    return transformedArray;
};