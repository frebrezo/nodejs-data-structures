'use strict';

const arrayList = require('../List/array-list');
const arrayListSearch = require('./array-list-linear-search');

describe('array-list-linear-search', function() {
    describe('addArrayListLinearSearch', function() {
        it('search not exists', function() {
            var list = new arrayList.ArrayList();
            expect(typeof(list.search)).toBe('undefined');
        });

        it('search exists', function() {
            var list = new arrayList.ArrayList();
            arrayListSearch.addArrayListLinearSearch(list);
            expect(typeof(list.search)).toBe('function');
        });

        it('search already exists', function() {
            var list = new arrayList.ArrayList();
            arrayListSearch.addArrayListLinearSearch(list);
            arrayListSearch.addArrayListLinearSearch(list);
            arrayListSearch.addArrayListLinearSearch(list);
            expect(typeof(list.search)).toBe('function');
        });

        it('object not ArrayList', function() {
            var list = new Array(10);
            expect(function() { arrayListSearch.addArrayListLinearSearch(list); }).toThrow(`list must be ArrayList [function Array() { [native code] }].`);
        });
    });

    describe('search', function() {
        it('exists', function() {
            var list = new arrayList.ArrayList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());
            arrayListSearch.addArrayListLinearSearch(list);
            var searchChar = 'l';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(2);
        });

        it('not exists', function() {
            var list = new arrayList.ArrayList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());
            arrayListSearch.addArrayListLinearSearch(list);
            var searchChar = 'x';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(-1);
        });

        it('exists beginning', function() {
            var list = new arrayList.ArrayList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());
            arrayListSearch.addArrayListLinearSearch(list);
            var searchChar = 'H';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(0);
        });

        it('exists end', function() {
            var list = new arrayList.ArrayList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());
            arrayListSearch.addArrayListLinearSearch(list);
            var searchChar = 'o';
            var index = list.search(searchChar);
            console.log(`[${searchChar}] found at position [${index}].`);
            expect(index).toBe(list.count - 1);
        });
    });
});
