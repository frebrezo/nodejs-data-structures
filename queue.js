'use strict';

var linkedList = require('./List/linked-list');

function Queue() {
    this.list = new linkedList.LinkedList();

    this.toString = function() {
        return this.list.toString();
    }

    this.enqueue = function(value) {
        this.list.add(value);
    }

    this.dequeue = function() {
        var value = this.list.deleteAt(0);
        return value;
    }

    this.peek = function() {
        return this.list.getAt(0);
    }

    this.clear = function() {
        this.list.clear();
    }

    Object.defineProperty(this, 'count', {
        get: function() { return this.list.count; },
        set: function(value) {
            // Do nothing.
        }
   });
}

module.exports.Queue = Queue;
