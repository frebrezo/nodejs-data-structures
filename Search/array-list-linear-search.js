'use strict';

const arrayList = require('../List/array-list');

function arrayListLinearSearch(value) {
    for (var i = 0; i < this.array.length; ++i) {
        if (this.array[i] === value) {
            return i;
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
function addArrayListLinearSearch(list) {
    if (list.constructor !== arrayList.ArrayList) {
        throw `list must be ArrayList [${list.constructor}].`;
    }
    if (typeof(list.search) === 'function') {
        list.search = arrayListLinearSearch;
    } else {
        Object.defineProperty(list, 'search', {
            writable: true,
            value: arrayListLinearSearch
        });
    }
}

module.exports.addArrayListLinearSearch = addArrayListLinearSearch;
