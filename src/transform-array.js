module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw Error();

    let transformedArray = [];
    const operators = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    for (var i = 0; i < arr.length; i++)

    if (arr[i] == operators[0] && i < arr.length - 1) {
        i += 1;
    } else if (arr[i] == operators[1] && i > 0) {
        transformedArray.pop();
    } else if (arr[i] == operators[2] && i < arr.length - 1) {
        transformedArray.push(arr[i + 1]);
    } else if (arr[i] == operators[3] && i > 0) {
        transformedArray.push(arr[i - 1]);
    } else if (arr[i] != operators[1] &&
        arr[i] != operators[3] &&
        arr[i] != operators[2] &&
        arr[i] != operators[0]) {

        transformedArray.push(arr[i]);
    }
    return transformedArray;
};