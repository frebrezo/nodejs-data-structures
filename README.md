# nodejs-data-structures
Javascript implementation of data structures for educational purposes.

## Lists
### ArrayList
It is understood that the Javascript language array construct behaves like an ArrayList and thus invalidates the need for an ArrayList implementation, but again the purpose of this implementation is to demonstrate underlying behaviors of a dynamic array.

Properties
* length
  * Accessor descriptor. Getter function returns `this.array.length`. Setter function sets `this.array.length`.

Functions
* toString
  * Outputs `this.array` contents to string in the following format `[<element0>, <element1>, <element2>, ..., <elementN>]`.
* extend
  * Expands array using the formula `(this.array.length * 3) / 2 + 1` and copies data from the old array into the new array.
* add
  * Appends `value` to the end of the array. If `this.count === this.array.length`, then `this.array` is extended.
* insertAt
  * Inserts `value` at `index`. If `this.count === this.array.length`, then `this.array` is extended.
* replaceAt
  * Replaces existing value at `index` with `value`.
* deleteAt
  * Deletes value at `index` by shifting array contents down by one to delete the value at `index`.
* getAt
  * Returns the value at `index`.
* clear
  * Generates a new array of size `this.array.length` and sets `this.count = 0`.

### LinkedList
Implies singly linked list.

Functions
* toString
  * Outputs linked list contents to string in the following format `[<element0>, <element1>, <element2>, ..., <elementN>]`.
* add
  * Appends `value` to the end of the linked list.
* insertAt
  * Inserts `value` at `index`.
* replaceAt
  * Replaces existing value at `index` with `value`.
* deleteAt
  * Deletes value at `index`.
* getAt
  * Returns the value at `index`.
* clear
  * Sets `this.head = undefined` and `this.tail = undefined`, and sets `this.count = 0`.

### DoubleLinkedList

### Stack
Implemented using LinkedList.
### Queue
Implemented using LinkedList.
### CircularQueue
Not implemented.

## Trees
### BinaryTree - not implemented.

## List algorithms
### Linear search
### Binary search
Requires a sorted list.
### Bubble sort
### Insertion/selection sort
### Merge sort
### Heap sort
### Quick sort

## Tree algorithms
