'use strict';

function DoubleLinkedListNode(value, next, prior) {
    this.value = value;
    this.next = next;
    this.prior = prior;
}

function DoubleLinkedList() {
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
        if (!this.head) {
            this.head = new DoubleLinkedListNode(value, undefined, undefined);
            this.tail = this.head;
        } else {
            this.tail.next = new DoubleLinkedListNode(value, undefined, this.tail);
            this.tail = this.tail.next;
        }
        ++this.count;
    }

    /**
     * Returns value at arbitrary index of DoubleLinkedList, where
     * index < count.
     * For performance reasons, if index <= count / 2, traverse
     * DoubleLinkedList starting from head. Otherwise, start at
     * tail. Worst case, only traverse half the list to get
     * value at index.
     * @param {*} index 
     */
    this.getAt = function(index) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index >= this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        // If index <= count / 2, start from head.
        //      Otherwise, start from tail.
        var currNode = undefined;
        if (index <= parseInt(this.count / 2)) {
            currNode = this.head;
            for (var i = 0; i < index; ++i) {
                currNode = currNode.next;
            }
        } else {
            currNode = this.tail;
            var iLast = this.count - index - 1;
            for (var i = 0; i < iLast; ++i) {
                currNode = currNode.prior;
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

module.exports.DoubleLinkedList = DoubleLinkedList;
