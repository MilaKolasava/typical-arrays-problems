exports.min = function min(array) {
    if (array === undefined || array === null || array.length <= 0) {
        return 0;
    } else {
        let arr = array.sort((a, b) => a - b);
        return arr[0];
    }
}

exports.max = function max(array) {
    if (array === undefined || array === null || array.length <= 0) {
        return 0;
    } else {
        let arr2 = array.sort((a, b) => a - b).reverse();
        return arr2[0];
    }
}

exports.avg = function avg(array) {

    if (array === undefined || array === null || array.length <= 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        let arrAvg = sum / array.length;
        return arrAvg;
    }
}
