'use strict';

var arrayList = require('../List/array-list');
var arrayListSort = require('./array-list-bubble-sort');

describe('array-list-bubble-sort', function() {
    describe('addArrayListBubbleSort', function() {
        it('search not exists', function() {
            var list = new arrayList.ArrayList();
            expect(typeof(list.sort)).toBe('undefined');
        });

        it('search exists', function() {
            var list = new arrayList.ArrayList();
            arrayListSort.addArrayListBubbleSort(list);
            expect(typeof(list.sort)).toBe('function');
        });

        it('search already exists', function() {
            var list = new arrayList.ArrayList();
            arrayListSort.addArrayListBubbleSort(list);
            arrayListSort.addArrayListBubbleSort(list);
            arrayListSort.addArrayListBubbleSort(list);
            expect(typeof(list.sort)).toBe('function');
        });

        it('object not ArrayList', function() {
            var list = new Array(10);
            expect(function() { arrayListSort.addArrayListBubbleSort(list); }).toThrow(`list must be ArrayList [function Array() { [native code] }].`);
        });
    });

    describe('sort', function() {
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
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
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
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
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
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
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
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
            console.log(list.toString());
            for (var i = 0; i < list.count - 1; ++i) {
                expect(list.getAt(i) <= list.getAt(i+1)).toBeTruthy();
            }
        });
    });
});