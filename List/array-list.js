'use strict';

function ArrayList (initialCapacity) {
    if (initialCapacity) {
        if (typeof initialCapacity !== 'number') {
            throw `initialCapacity [${initialCapacity}] is not a number.`
        }
        initialCapacity = parseInt(initialCapacity);
        this.array = new Array(initialCapacity);
    } else {
        this.array = new Array(10);
    }
    this.count = 0;

    this.toString = function() {
        var str = '';
        for (var i = 0; i < this.count; ++i) {
            if (i > 0) {
                str += ', ';
            }
            str += this.array[i];
        }
        return `[${str}]`;
    }

    Object.defineProperty(this, 'length', {
        get: function() { return this.array.length; },
        set: function(value) {
            if (typeof value !== 'number') {
                throw `value [${value}] is not a number.`
            }
            value = parseInt(value);
            this.array.length = value;
        }
    });

    this.extend = function() {
        var newCapacity = parseInt((this.array.length * 3) / 2 + 1);
        var newArray = new Array(newCapacity);
        for (var i = 0; i < this.array.length; ++i) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    this.add = function(value) {
        if (this.array.length === this.count) {
            this.extend();
        }
        this.array[this.count] = value;
        ++this.count;
    }

    this.insertAt = function(index, value) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index > this.array.length) {
            throw `index [${index}] larger than array length [${this.array.length}].`;
        }
        if (this.array.length === this.count) {
            this.extend();
        }
        if (index >= this.count) {
            this.array[index] = value;
            this.count = index + 1;
        } else {
            for (var i = this.count; i > index; --i) {
                this.array[i] = this.array[i-1];
            }
            this.array[index] = value;
            ++this.count;
        }
    }

    this.replaceAt = function(index, value) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index >= this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        this.array[index] = value;
    }

    this.deleteAt = function(index) {
        if (typeof index !== 'number') {
            throw `index [${index}] is not a number.`
        }
        index = parseInt(index);
        if (index >= this.count) {
            throw `index [${index}] larger than the number of elements in array [${this.count}].`;
        }
        for (var i = index; i < this.count - 1; ++i) {
            this.array[i] = this.array[i+1];
        }
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
        return this.array[index];
    }

    this.clear = function() {
        this.array = new Array(this.array.length);
        this.count = 0;
    }
}

module.exports.ArrayList = ArrayList;

console.log('Instantiate new ArrayList.');
const list = new ArrayList(5);
console.log(list.toString());
console.log(list.length);
console.log(list.count);
console.log(`Initialize ArrayList with ['H', 'e', 'l', 'l', 'o'].`);
list.add('H');
list.add('e');
list.add('l');
list.add('l');
list.add('o');
console.log(list.toString());
console.log(list.length);
console.log(list.count);
console.log(`Insert into position 3 value 'z'.`);
list.insertAt(3, 'z');
console.log(list.toString());
console.log(list.length);
console.log(list.count);
console.log(`Replace position 0 with value 'y'.`);
list.replaceAt(0, 'y');
console.log(list.toString());
console.log(list.length);
console.log(list.count);
console.log('Delete position 2.')
list.deleteAt(2);
console.log(list.toString());
console.log(list.length);
console.log(list.count);
console.log('Clear ArrayList.');
list.clear();
console.log(list.toString());
console.log(list.length);
console.log(list.count);