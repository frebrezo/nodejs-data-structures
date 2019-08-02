'use strict';

var arrayList = require('../List/array-list');

function bubbleSort(list) {
    var iLast = list.count - 1;
    for (var i = 0; i < iLast; ++i) {
        var swapOccurred = false;
        var jLast = list.count - 1 - i;
        for (var j = 0; j < jLast; ++j) {
            var leftValue = list.getAt(j);
            var rightValue = list.getAt(j+1);
            if (leftValue > rightValue) {
                list.replaceAt(j+1, leftValue);
                list.replaceAt(j, rightValue);
                swapOccurred = true;
            }
        }
        if (!swapOccurred) {
            break;
        }
    }
}

module.exports.bubbleSort = bubbleSort;
