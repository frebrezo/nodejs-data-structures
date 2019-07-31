'use strict';

var queue = require('./queue');

describe('queue', function() {
    describe('enqueue', function() {
        it('5 elements', function() {
            var q = new queue.Queue();
            q.enqueue('H');
            expect(q.count).toBe(1);
            q.enqueue('e');
            expect(q.count).toBe(2);
            q.enqueue('l');
            expect(q.count).toBe(3);
            q.enqueue('l');
            expect(q.count).toBe(4);
            q.enqueue('o');
            expect(q.peek()).toBe('H');
            expect(q.count).toBe(5);
            console.log(q.toString());
        });
    });

    describe('dequeue', function() {
        it('5 elements', function() {
            var q = new queue.Queue();
            q.enqueue('H');
            q.enqueue('e');
            q.enqueue('l');
            q.enqueue('l');
            q.enqueue('o');
            console.log(q.toString());
            var value = undefined;
            expect(q.peek()).toBe('H');
            value = q.dequeue();
            expect(value).toBe('H')
            expect(q.count).toBe(4);
            console.log(q.toString());
            expect(q.peek()).toBe('e');
            value = q.dequeue();
            expect(value).toBe('e')
            expect(q.count).toBe(3);
            console.log(q.toString());
            expect(q.peek()).toBe('l');
            value = q.dequeue();
            expect(value).toBe('l')
            expect(q.count).toBe(2);
            console.log(q.toString());
            expect(q.peek()).toBe('l');
            value = q.dequeue();
            expect(value).toBe('l')
            expect(q.count).toBe(1);
            console.log(q.toString());
            expect(q.peek()).toBe('o');
            value = q.dequeue();
            expect(value).toBe('o')
            expect(q.count).toBe(0);
            console.log(q.toString());
        });
    });
});
