'use strict';

const arrayList = require('../List/array-list');

function arrayListBinarySearch(value) {
    var start = 0;
    var end = this.array.length -1;
    var mid = end;
    while (start < end) {
        if (this.array[start] === value) {
            return start;
        }
        if (this.array[end] === value) {
            return end;
        }
        // Simulate classic programming language behavior where
        //      dividing integers yields an integer with
        //      the decimal part truncated.
        mid = Math.floor((end - start) / 2) + start;
        if (this.array[mid] === value) {
            return mid;
        }
        if (value < this.array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

/**
 * Add search function to ArrayList dynamically.
 * https://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface
 * https://en.wikipedia.org/wiki/Duck_typing
 * @param {*} list 
 */
function addArrayListBinarySearch(list) {
    if (list.constructor !== arrayList.ArrayList) {
        throw `list must be ArrayList [${list.constructor}].`;
    }
    if (typeof(list.search) === 'function') {
        list.search = arrayListBinarySearch;
    } else {
        Object.defineProperty(list, 'search', {
            writable: true,
            value: arrayListBinarySearch
        });
    }
}

module.exports.addArrayListBinarySearch = addArrayListBinarySearch;
