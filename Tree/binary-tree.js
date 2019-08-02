'use strict';

function BinaryTreeNode(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function BinaryTree() {
    this.root = undefined;

    this.toStringSub = function(node, depth) {
        if (!node) {
            return '';
        }
        var s = '';
        s = `-[${node.value}]`;
        if (node.right) {
            s += this.toStringSub(node.right, depth + 1);
        }
        if (node.left) {
            s += '\n';
            for (var i = 0; i < (depth + 1) * 4; ++i) {
                s += ' ';
            }
            s += this.toStringSub(node.left, depth + 1);
        }
        return s;
    }

    this.toString = function() {
        var s = `-[${this.root.value}]`;
        s += this.toStringSub(this.root.right, 1);
        s += '\n';
        for (let i = 0; i < 4; ++i) {
            s += ' ';
        }
        s += this.toStringSub(this.root.left, 1);
        return s;
    }

    this.addSub = function(newNode, node) {
        if (!node) {
            return newNode;
        }
        var nextNode = undefined;
        if (newNode.value <= node.value) {
            if (!node.left) {
                node.left = newNode;
                return node;
            } else {
                nextNode = this.addSub(newNode, node.left)
            }
        } else {
            if (!node.right) {
                node.right = newNode;
                return node;
            } else {
                nextNode = this.addSub(newNode, node.right);
            }
        }
        return nextNode;
    }

    this.add = function(value) {
        if (!this.root) {
            this.root = new BinaryTreeNode(value, undefined, undefined);
        } else {
            var newNode = new BinaryTreeNode(value, undefined, undefined);
            this.addSub(newNode, this.root);
        }
    }

    this.infixSub = function(array, node) {
        if (!node) return;
        array.push(node.value);
        this.infixSub(array, node.left);
        this.infixSub(array, node.right);
    }

    this.infix = function() {
        var array = [];
        this.infixSub(array, this.root);
        return array;
    }
}

module.exports.BinaryTree = BinaryTree;
