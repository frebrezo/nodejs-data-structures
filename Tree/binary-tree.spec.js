'use strict';

const binaryTree = require('./binary-tree');

function arrayToString(array) {
    var str = '';
    for (var i = 0; i < array.length; ++i) {
        if (i > 0) {
            str += ', ';
        }
        str += array[i];
    }
    return `[${str}]`;
}

describe('binary-tree', function () {
    it('add', function() {
        var bTreeValues = ['5', '1', '3', '9', '0', '2', '5', '2', '2', '8', '6', '0', '2', '3', '5'];
        console.log(arrayToString(bTreeValues));
        var bt = new binaryTree.BinaryTree();
        for (var i = 0; i < bTreeValues.length; ++i) {
            bt.add(bTreeValues[i]);
            console.log(bt.toString());
            console.log();
        }
        var array = bt.infix();
        console.log(arrayToString(array));
        expect(array).toEqual(['5', '1', '0', '0', '3', '2', '2', '2', '2', '3', '5', '5', '9', '8', '6']);
    });
});
