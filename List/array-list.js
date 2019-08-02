'use strict';

/**
 * Managed array implementation. This implementation allows data
 * to be inserted into any index of the underlying array as long as
 * the index at which the data is being inserted is <= count.
 * In other words, it is possible to have an ArrayList where the data
 * is fragmented. If data is inserted into the end of the array,
 * it is effectively appended.
 * @param {*} initialCapacity 
 */
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

    /**
     * Converts ArrayList into a string for display purposed.
     * This method does not cache the generated string. The
     * resulting string is regenerated every time toString is
     * called.
     */
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

    /**
     * Helper method to return the length of the underlying array.
     */
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

    /**
     * Expands the underlying array using the formula:
     * (this.array.length * 3) / 2 + 1.
     * Data from the old array is copied into the new array.
     */
    this.extend = function() {
        var newCapacity = parseInt((this.array.length * 3) / 2 + 1);
        var newArray = new Array(newCapacity);
        for (var i = 0; i < this.array.length; ++i) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    /**
     * Appends value to the end of the underlying array. If the
     * array is full, the array is expanded and then the value
     * is added to the end.
     * @param {*} value 
     */
    this.add = function(value) {
        if (this.array.length === this.count) {
            this.extend();
        }
        this.array[this.count] = value;
        ++this.count;
    }

    /**
     * Inserts value at arbitrary index of the ArrayList.
     * The function will succeed as long as index <= count.
     * if index === count, value is effectively appended.
     * @param {*} index 
     * @param {*} value 
     */
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

    /**
     * Replaces value at arbitrary index of the ArrayList, where
     * index < count.
     * @param {*} index 
     * @param {*} value 
     */
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

    /**
     * Deletes value at arbitrary index of ArrayList, where
     * index < count. Function deleteAt shifts the array values
     * down by 1 starting at index.
     * @param {*} index 
     */
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

    /**
     * Returns value at arbitrary index of ArrayList, where
     * index < count.
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
        return this.array[index];
    }

    /**
     * Reinitializes underly array to a new array with length of
     * the original array. Sets count = 0.
     */
    this.clear = function() {
        this.array = new Array(this.array.length);
        this.count = 0;
    }
}

module.exports.ArrayList = ArrayList;
