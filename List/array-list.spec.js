'use strict';

var arrayList = require('./array-list');

describe('ArrayList', function() {
    describe('constructor', function() {
        it('default size is 10', function() {
            var list = new arrayList.ArrayList();
            expect(list.length).toBe(10);
        });
    
        it('size is 5', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            expect(list.length).toBe(size);
        });
    });

    describe('add', function() {
        it('5 elements', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            list.add('e');
            expect(list.count).toBe(2);
            expect(list.length).toBe(size);
            list.add('l');
            expect(list.count).toBe(3);
            expect(list.length).toBe(size);
            list.add('l');
            expect(list.count).toBe(4);
            expect(list.length).toBe(size);
            list.add('o');
            expect(list.count).toBe(5);
            expect(list.length).toBe(size);
        });
    
        it('resize', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            expect(list.count).toBe(5);
            expect(list.length).toBe(size);
            list.add(' ');
            list.add('W');
            expect(list.count).toBe(7);
            expect(list.length > size).toBeTruthy();
        });
    });

    describe('getAt', function() {
        it('5 elements', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');

            expect(list.getAt(0)).toBe('H');
            expect(list.getAt(1)).toBe('e');
            expect(list.getAt(2)).toBe('l');
            expect(list.getAt(3)).toBe('l');
            expect(list.getAt(4)).toBe('o');
        });
    
        it('index beyond count', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            expect(function () { list.getAt(10); }).toThrow(`index [10] larger than the number of elements in array [${size}].`);
        });
    });

    describe('insertAt', function() {
        it('within count', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.insertAt(3, 'z');
            expect(list.getAt(3)).toBe('z');
            expect(list.count).toBe(6);
            expect(list.length > size).toBeTruthy();
            expect(list.length > list.count).toBeTruthy();
        });

        it('beyond count within list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            list.insertAt(4, 'o');
            expect(list.getAt(4)).toBe('o');
            expect(list.count).toBe(size);
            expect(list.length).toBe(size);
        });

        it('list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            list.insertAt(5, 'z');
            expect(list.getAt(5)).toBe('z');
            expect(list.count).toBe(6);
            expect(list.length > size).toBeTruthy();
        });

        it('beyond list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.insertAt(10, 'o'); }).toThrow(`index [10] larger than array length [${size}].`);
        });
    });

    describe('replaceAt', function() {
        it('within count', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.replaceAt(3, 'z');
            expect(list.getAt(3)).toBe('z');
            expect(list.count).toBe(size);
            expect(list.length).toBe(size);
        });

        it('beyond count within list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.replaceAt(3, 'l'); }).toThrow(`index [3] larger than the number of elements in array [1].`);
        });

        it('list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.replaceAt(5, 'l'); }).toThrow(`index [5] larger than the number of elements in array [1].`);
        });

        it('beyond list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.replaceAt(10, 'o'); }).toThrow(`index [10] larger than the number of elements in array [1].`);
        });
    });

    describe('deleteAt', function() {
        it('within count', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.deleteAt(3);
            expect(list.getAt(3)).toBe('o');
            expect(list.count).toBe(4);
            expect(list.length).toBe(size);
        });

        it('beyond count within list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.deleteAt(3); }).toThrow(`index [3] larger than the number of elements in array [1].`);
        });

        it('list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.deleteAt(5); }).toThrow(`index [5] larger than the number of elements in array [1].`);
        });

        it('beyond list.length', function() {
            var size = 5;
            var list = new arrayList.ArrayList(size);
            list.add('H');
            expect(list.count).toBe(1);
            expect(list.length).toBe(size);
            expect(function() { list.deleteAt(10); }).toThrow(`index [10] larger than the number of elements in array [1].`);
        });
    });
});