/**
 * create sort by callback
 * Created by linajiema on 2018/1/5.
 */

var sort = function (arr, comparefn) {
    if(!comparefn) {
        comparefn = function (x, y) {
            if (x === y) return 0;
            else return x < y ? -1 : 1;
        }
    }
    var insertionSort = function insertionSort(a, from=0, to=10) {
        for (var i = from + 1; i < to; i++) {
            var element = a[i];
            for (var j = i - 1; j >= from; j--) {
                var tmp = a[j];
                var order = comparefn(tmp, element);
                if (order > 0) {
                    a[j + 1] = tmp;
                } else {
                    break;
                }
            }
            a[j + 1] = element;
        }
        return a;
    }
    return insertionSort(arr, 0, arr.length);
}
console.log(sort([5,2,9], function (a, b) {
    return a - b;
}))

