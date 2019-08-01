'use strict';

var linkedList = require('./linked-list');

describe('linked-list', function() {
    describe('add', function() {
        it('5 elements', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            expect(list.count).toBe(1);
            list.add('e');
            expect(list.count).toBe(2);
            list.add('l');
            expect(list.count).toBe(3);
            list.add('l');
            expect(list.count).toBe(4);
            list.add('o');
            expect(list.count).toBe(5);
            console.log(list.toString());
        });
    });

    describe('getAt', function() {
        it('5 elements', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());

            expect(list.getAt(0)).toBe('H');
            expect(list.getAt(1)).toBe('e');
            expect(list.getAt(2)).toBe('l');
            expect(list.getAt(3)).toBe('l');
            expect(list.getAt(4)).toBe('o');
        });
    
        it('index beyond count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());
            expect(function () { list.getAt(10); }).toThrow(`index [10] larger than the number of elements in array [${list.count}].`);
        });
    });

    describe('insertAt', function() {
        it('beginning', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.insertAt(0, 'x');
            console.log(list.toString());
            expect(list.getAt(0)).toBe('x');
            expect(list.count).toBe(6);
        });

        it('within count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.insertAt(3, 'x');
            console.log(list.toString());
            expect(list.getAt(3)).toBe('x');
            expect(list.count).toBe(6);
        });

        it('end', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.insertAt(5, 'x');
            console.log(list.toString());
            expect(list.getAt(5)).toBe('x');
            expect(list.count).toBe(6);
        });

        it('beyond count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            console.log(list.toString());
            expect(list.count).toBe(1);
             expect(function() { list.insertAt(4, 'x'); }).toThrow(`index [4] larger than the number of elements in array [${list.count}].`);
        });

        it('count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            expect(list.count).toBe(1);
            list.insertAt(1, 'x');
            console.log(list.toString());
            expect(list.getAt(1)).toBe('x');
            expect(list.count).toBe(2);
        });
    });

    describe('replaceAt', function() {
        it('beginning', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.replaceAt(0, 'z');
            console.log(list.toString());
            expect(list.getAt(0)).toBe('z');
            expect(list.count).toBe(5);
        });

        it('within count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.replaceAt(3, 'z');
            console.log(list.toString());
            expect(list.getAt(3)).toBe('z');
            expect(list.count).toBe(5);
        });

        it('end', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            list.replaceAt(4, 'z');
            console.log(list.toString());
            expect(list.getAt(4)).toBe('z');
            expect(list.count).toBe(5);
        });

        it('beyond count', function() {
            var size = 5;
            var list = new linkedList.LinkedList();
            list.add('H');
            console.log(list.toString());
            expect(list.count).toBe(1);
            expect(function() { list.replaceAt(3, 'l'); }).toThrow(`index [3] larger than the number of elements in array [${list.count}].`);
        });

        it('count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            console.log(list.toString());
            expect(list.count).toBe(1);
            expect(function() { list.replaceAt(1, 'l'); }).toThrow(`index [1] larger than the number of elements in array [${list.count}].`);
        });
    });

    describe('deleteAt', function() {
        it('beginning', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            var value = list.deleteAt(0);
            expect(value).toBe('H');
            console.log(list.toString());
            expect(list.getAt(0)).toBe('e');
            expect(list.count).toBe(4);
        });

        it('within count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            var value = list.deleteAt(3);
            expect(value).toBe('l');
            console.log(list.toString());
            expect(list.getAt(3)).toBe('o');
            expect(list.count).toBe(4);
        });

        it('end', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            var value = list.deleteAt(list.count - 1);
            expect(value).toBe('o');
            console.log(list.toString());
            expect(list.getAt(list.count - 1)).toBe('l');
            expect(list.count).toBe(4);
        });

        it('beyond count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            console.log(list.toString());
            expect(list.count).toBe(1);
            expect(function() { list.deleteAt(3); }).toThrow(`index [3] larger than the number of elements in array [${list.count}].`);
        });

        it('count', function() {
            var list = new linkedList.LinkedList();
            list.add('H');
            console.log(list.toString());
            expect(list.count).toBe(1);
            expect(function() { list.deleteAt(1); }).toThrow(`index [1] larger than the number of elements in array [${list.count}].`);
        });
    });
});
