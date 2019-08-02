'use strict';

const binaryTree = require('./binary-tree');

// TODO: Need a better way to test the binary tree generation.
describe('binary-tree', function () {
    it('add', function() {
        var bt = new binaryTree.BinaryTree();
        bt.add('5');
        console.log(bt.toString());
        console.log();
        bt.add('1');
        console.log(bt.toString());
        console.log();
        bt.add('3');
        console.log(bt.toString());
        console.log();
        bt.add('9');
        console.log(bt.toString());
        console.log();
        bt.add('0');
        console.log(bt.toString());
        console.log();
        bt.add('2');
        console.log(bt.toString());
        console.log();
        bt.add('5');
        console.log(bt.toString());
        console.log();
        bt.add('2');
        console.log(bt.toString());
        console.log();
        bt.add('2');
        console.log(bt.toString());
        console.log();
        bt.add('8');
        console.log(bt.toString());
        console.log();
        bt.add('6');
        console.log(bt.toString());
        console.log();
        bt.add('0');
        console.log(bt.toString());
        console.log();
        bt.add('2');
        console.log(bt.toString());
        console.log();
        bt.add('3');
        console.log(bt.toString());
        console.log();
        bt.add('5');
        console.log(bt.toString());
        console.log();
    });
});