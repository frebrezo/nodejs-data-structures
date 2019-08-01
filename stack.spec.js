'use strict';

var stack = require('./stack');

describe('stack', function() {
    describe('push', function() {
        it('5 elements', function() {
            var s = new stack.Stack();
            s.push('H');
            expect(s.count).toBe(1);
            s.push('e');
            expect(s.count).toBe(2);
            s.push('l');
            expect(s.count).toBe(3);
            s.push('l');
            expect(s.count).toBe(4);
            s.push('o');
            expect(s.top()).toBe('o');
            expect(s.count).toBe(5);
            console.log(s.toString());
        });
    });

    describe('pop', function() {
        it('5 elements', function() {
            var s = new stack.Stack();
            s.push('H');
            s.push('e');
            s.push('l');
            s.push('l');
            s.push('o');
            console.log(s.toString());
            var value = undefined;
            expect(s.top()).toBe('o');
            value = s.pop();
            expect(value).toBe('o')
            expect(s.count).toBe(4);
            console.log(s.toString());
            expect(s.top()).toBe('l');
            value = s.pop();
            expect(value).toBe('l')
            expect(s.count).toBe(3);
            console.log(s.toString());
            expect(s.top()).toBe('l');
            value = s.pop();
            expect(value).toBe('l')
            expect(s.count).toBe(2);
            console.log(s.toString());
            expect(s.top()).toBe('e');
            value = s.pop();
            expect(value).toBe('e')
            expect(s.count).toBe(1);
            console.log(s.toString());
            expect(s.top()).toBe('H');
            value = s.pop();
            expect(value).toBe('H')
            expect(s.count).toBe(0);
            console.log(s.toString());
        });
    });
});
