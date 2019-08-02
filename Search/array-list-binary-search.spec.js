'use strict';

const arrayList = require('../List/array-list');
const arrayListSort = require('../Sort/array-list-bubble-sort');
const arrayListSearch = require('./array-list-binary-search');
const arrayListLinearSearch = require('./array-list-linear-search');

describe('array-list-binary-search', function() {
    describe('addArrayListBinarySearch', function() {
        it('search not exists', function() {
            var list = new arrayList.ArrayList();
            expect(typeof(list.search)).toBe('undefined');
        });

        it('search exists', function() {
            var list = new arrayList.ArrayList();
            arrayListSearch.addArrayListBinarySearch(list);
            expect(typeof(list.search)).toBe('function');
        });

        it('search already exists', function() {
            var list = new arrayList.ArrayList();
            arrayListSearch.addArrayListBinarySearch(list);
            arrayListSearch.addArrayListBinarySearch(list);
            arrayListSearch.addArrayListBinarySearch(list);
            expect(typeof(list.search)).toBe('function');
        });

        it('object not ArrayList', function() {
            var list = new Array(10);
            expect(function() { arrayListSearch.addArrayListBinarySearch(list); }).toThrow(`list must be ArrayList [function Array() { [native code] }].`);
        });
    });

    describe('search', function() {
        it('exists', function() {
            var list = new arrayList.ArrayList();
            list.add('i');
            list.add('b');
            list.add('e');
            list.add('f');
            list.add('g');
            list.add('b');
            list.add('a');
            list.add('j');
            list.add('h');
            list.add('b');

            var searchChar = 'b';
            var index = -1;

            console.log(list.toString());
            arrayListLinearSearch.addArrayListLinearSearch(list);
            index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(1);

            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
            console.log(list.toString());
            arrayListSearch.addArrayListBinarySearch(list);
            index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(3);
        });

        it('not exists', function() {
            var list = new arrayList.ArrayList();
            list.add('i');
            list.add('b');
            list.add('e');
            list.add('f');
            list.add('g');
            list.add('b');
            list.add('a');
            list.add('j');
            list.add('h');
            list.add('b');
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
            console.log(list.toString());
            arrayListSearch.addArrayListBinarySearch(list);
            var searchChar = 'x';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(-1);
        });

        it('exists beginning', function() {
            var list = new arrayList.ArrayList();
            list.add('i');
            list.add('b');
            list.add('e');
            list.add('f');
            list.add('g');
            list.add('b');
            list.add('a');
            list.add('j');
            list.add('h');
            list.add('b');
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
           console.log(list.toString());
            arrayListSearch.addArrayListBinarySearch(list);
            var searchChar = 'a';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(0);
        });

        it('exists end', function() {
            var list = new arrayList.ArrayList();
            list.add('i');
            list.add('b');
            list.add('e');
            list.add('f');
            list.add('g');
            list.add('b');
            list.add('a');
            list.add('j');
            list.add('h');
            list.add('b');
            arrayListSort.addArrayListBubbleSort(list);
            list.sort();
            console.log(list.toString());
            arrayListSearch.addArrayListBinarySearch(list);
            var searchChar = 'j';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(list.count - 1);
        });
    });
});