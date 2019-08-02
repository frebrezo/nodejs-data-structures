'use strict';

var arrayList = require('../List/array-list');
var arrayListSort = require('./array-list-bubble-sort');

describe('array-list-sort', function() {
    it('sort', function() {
        var list = new arrayList.ArrayList();
        list.add(8);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(1);
        list.add(0);
        list.add(9);
        list.add(7);
        list.add(2);
        console.log(list.toString());
        arrayListSort.bubbleSort(list);
        console.log(list.toString());
        for (var i = 0; i < list.count - 1; ++i) {
            expect(list.getAt(i) <= list.getAt(i+1)).toBeTruthy();
        }
    });

    it('sort with duplicates', function() {
        var list = new arrayList.ArrayList();
        list.add(8);
        list.add(1);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(1);
        list.add(0);
        list.add(9);
        list.add(7);
        list.add(1);
        console.log(list.toString());
        arrayListSort.bubbleSort(list);
        console.log(list.toString());
        for (var i = 0; i < list.count - 1; ++i) {
            expect(list.getAt(i) <= list.getAt(i+1)).toBeTruthy();
        }
    });

    it('sort reversed', function() {
        var list = new arrayList.ArrayList();
        list.add(9);
        list.add(8);
        list.add(7);
        list.add(6);
        list.add(5);
        list.add(4);
        list.add(3);
        list.add(2);
        list.add(1);
        list.add(0);
        console.log(list.toString());
        arrayListSort.bubbleSort(list);
        console.log(list.toString());
        for (var i = 0; i < list.count - 1; ++i) {
            expect(list.getAt(i) <= list.getAt(i+1)).toBeTruthy();
        }
    });

    it('sort sorted', function() {
        var list = new arrayList.ArrayList();
        list.add(0);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.add(8);
        list.add(9);
        console.log(list.toString());
        arrayListSort.bubbleSort(list);
        console.log(list.toString());
        for (var i = 0; i < list.count - 1; ++i) {
            expect(list.getAt(i) <= list.getAt(i+1)).toBeTruthy();
        }
    });
});