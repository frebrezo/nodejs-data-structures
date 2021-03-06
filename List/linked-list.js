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
        while (currNode) {
            if (currNode !== this.head) {
                str += ', ';
            }
            str += currNode.value;
            currNode = currNode.next;
        }
        return `[${str}]`;
    }

    this.add = function(value) {
        if (!this.head && !this.tail) {
            this.head = new LinkedListNode(value, undefined);
            this.tail = this.head;
        } else if (this.head === this.tail) {
            this.head.next = new LinkedListNode(value, undefined);
            this.tail = this.head.next;
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
        if (index === 0 && !this.head && !this.tail) {
            this.head = new LinkedListNode(value, undefined);
            this.tail = this.head;
        } else if (index === 0 && this.head === this.tail) {
            this.head = new LinkedListNode(value, this.head);
            this.tail = this.head.next;
        } else if (index > 0 && this.head === this.tail) {
            this.head.next = new LinkedListNode(value, undefined);
            this.tail = this.head.next;
        } else if (index === this.count) {
            this.tail.next = new LinkedListNode(value, undefined);
            this.tail = this.tail.next;
        } else {
            var prevNode = undefined;
            var currNode = this.head;
            for (var i = 0; i < index; ++i) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            if (currNode === this.head) {
                this.head = new LinkedListNode(value, currNode);
            } else {
                prevNode.next = new LinkedListNode(value, currNode);
            }
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
        if (index === this.count - 1) {
            currNode = this.tail;
        } else {
            for (var i = 0; i < index; ++i) {
                currNode = currNode.next;
            }
        }
        currNode.value = value;
    }

    /**
     * Deletes element at position index and returns the value.
     */
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
        if (index === 0 && this.head === this.tail) {
            this.head = undefined;
            this.tail = this.head;
        } else {
            for (var i = 0; i < index; ++i) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            if (currNode === this.head) {
                this.head = currNode.next;
            } else if (currNode == this.tail) {
                prevNode.next = undefined;
                this.tail = prevNode;
            } else {
                prevNode.next = currNode.next;
            }
        }
        --this.count;
        return currNode.value;
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
        if (index === this.count - 1) {
            currNode = this.tail;
        } else {
            for (var i = 0; i < index; ++i) {
                currNode = currNode.next;
            }
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
