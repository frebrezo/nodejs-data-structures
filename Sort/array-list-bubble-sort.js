'use strict';

var arrayList = require('../List/array-list');

function arrayListBubbleSort() {
    var iLast = this.array.length - 1;
    for (var i = 0; i < iLast; ++i) {
        var swapOccurred = false;
        var jLast = this.array.length - 1 - i;
        for (var j = 0; j < jLast; ++j) {
            var leftValue = this.array[j];
            var rightValue = this.array[j+1];
            if (leftValue > rightValue) {
                this.array[j+1] = leftValue;
                this.array[j] = rightValue;
                swapOccurred = true;
            }
        }
        if (!swapOccurred) {
            break;
        }
    }
}

function addArrayListBubbleSort(list) {
    if (list.constructor !== arrayList.ArrayList) {
        throw `list must be ArrayList [${list.constructor}].`;
    }
    if (typeof(list.sort) === 'function') {
        list.sort = arrayListBubbleSort;
    } else {
        Object.defineProperty(list, 'sort', {
            writable: true,
            value: arrayListBubbleSort
        });
    }
}

module.exports.addArrayListBubbleSort = addArrayListBubbleSort;
