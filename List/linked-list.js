'use strict';

function LinkedListNode(value, next) {
    this.value = value;
    this.next = next;
}

function LinkedList() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;

    this.toString = function() {
        var str = '';
        var currNode = this.head;
        while (currNode !== undefined) {
            if (currNode !== this.head) {
                str += ', ';
            }
            str += currNode.value;
            currNode = currNode.next;
        }
        return `[${str}]`;
    }

    this.add = function(value) {
        if (this.head === undefined) {
            this.head = new LinkedListNode(value, undefined);
            this.tail = this.head;
        } else {
            this.tail.next = new LinkedListNode(value, undefined);
            this.tail = this.tail.next;
        }
        ++this.count;
    }

    this.insertAt = function(index, value) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index > this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        if (index === this.count) {
            this.tail.next = new LinkedListNode(value, undefined);
            this.tail = this.tail.next;
        } else {
            var prevNode = undefined;
            var currNode = this.head;
            for (var i = 0; i < index; ++i) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = new LinkedListNode(value, currNode);
        }
        ++this.count;
    }

    this.replaceAt = function(index, value) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index >= this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        var currNode = this.head;
        for (var i = 0; i < index; ++i) {
            currNode = currNode.next;
        }
        currNode.value = value;
    }

    this.deleteAt = function(index) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index >= this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        var prevNode = undefined;
        var currNode = this.head;
        for (var i = 0; i < index; ++i) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        prevNode.next = currNode.next;
        --this.count;
    }

    this.getAt = function(index) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index >= this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        var currNode = this.head;
        for (var i = 0; i < index; ++i) {
            currNode = currNode.next;
        }
        return currNode.value;
    }

    this.clear = function() {
        this.head = undefined;
        this.tail = undefined;
        this.count = 0;
    }
}

module.exports.LinkedList = LinkedList;
