module.exports = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let lastItem = '';
    let returnArr = [];
    if (typeof(iterable) === 'string') {
        iterable = iterable.split('');
    }

    iterable.forEach(currentItem => {
        if (currentItem !== lastItem) {
            returnArr.push(currentItem);
        }
        lastItem = currentItem;
    })
    return returnArr;
}
