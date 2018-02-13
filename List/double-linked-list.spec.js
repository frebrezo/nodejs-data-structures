'use strict';

var doubleLinkedList = require('./double-linked-list');

describe('double-linked-list', function() {
    describe('add', function() {
        it('5 elements', function() {
            var list = new doubleLinkedList.DoubleLinkedList();
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
            var list = new doubleLinkedList.DoubleLinkedList();
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
            var list = new doubleLinkedList.DoubleLinkedList();
            list.add('H');
            list.add('e');
            list.add('l');
            list.add('l');
            list.add('o');
            console.log(list.toString());
            expect(function () { list.getAt(10); }).toThrow(`index [10] larger than the number of elements in array [${list.count}].`);
        });
    });
});
