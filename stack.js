'use strict';

var linkedList = require('./List/linked-list');

function Stack() {
    this.list = new linkedList.LinkedList();

    this.toString = function() {
        return this.list.toString();
    }

    this.push = function(value) {
        this.list.insertAt(0, value);
    }

    this.pop = function() {
        var value = this.list.deleteAt(0);
        return value;
    }

    this.top = function() {
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

module.exports.Stack = Stack;
