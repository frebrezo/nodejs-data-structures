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
Implies singly linked list. A singly linked list has two properties that track the list:
* `this.head`
  * The head tracks the beginning of the list.
* `this.tail`
  * The tail tracks the end of the list.

Unlike an ArrayList, the middle of the list is not accessible at random. Instead the singly linked list must be TRAVERSED to access elements that are not the head or the tail of the list. This means for a singly linked list of length n, that it will take at most n-1 operations to access the 2nd to last element in the list, the last element in the list being accessible using `this.tail`.

While it may seems unwieldy to use a singly linked list, the benefit is in the lack of continuous memory. An ArrayList REQUIRES a single uninterrupted block of memory to store the underlying array. However, a singly linked list is a collection of nodes instantiated at runtime linked together by `this.next` in LinkedListNode.

Because it is expensive to traverse a singly linked list, generally operations that operate against the head or the tail of the singly linked list is preferred.

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
A Stack is a specialized list where elements can ONLY be added to the beginning of the list and removed from the beginning of the list, this is known as a LIFO (Last In, First Out). A Stack is similar to a stack of plates. The last plate added to the stack is the first plate taken from the stack of plates. A Stack only allows for two operations:
* push
  * Adds an element to the beginning of the list.
* pop
  * Removes an element from the beginning of the list.

There is a helper method known as top that gets the value of the first Stack node.

The Stack is implemented using LinkedList because operations are against the head of the list, thus very efficient.

Examples of usages of a Stack
* Similar to a breadcrumb trail, a Stack can be used to "go back" to a particular point as you perform operations to traverse a different path.
* Reverse Polish Notation calculator.

### Queue
A Queue is a specialized list where elements can ONLY be added to the end of the list and removed from the front of the list, this is known as a FIFO (First In, First Out). A Queue is similar to a line (queue) of people, where each person is helped in the order they arrived in the line. A Queue only allows for two operations:
* enqueue
  * Adds an element to the end of the list.
* dequeue
  * Removes an element from the beginning of the list.

There is a helper method known as peek that gets the value of the first Queue node.

The Queue is implemented using LinkedList because operations are against the head and the tail of the list, thus very efficient.

Examples of usages of a Stack
* A work queue is a queue used for processesing where multiple workers pull a work element from a work queue for processing resulting in work being distributed to available workers. Generally this is known as queuing technology. Queue technologies allow messages (work) to be added to a queue to be pulled by workers to processing.
* Conversely, available workers are in a queue and as work becomes available, an available worker is removed from the queue to process the work. If there are no available workers to process the work, then the system waits for a worker to process the work. This is known as a Thread Pool.

### CircularQueue
Not implemented.

## Trees
### BinaryTree
https://stackoverflow.com/questions/2708914/how-to-add-add-node-in-binary-tree
### LCRSTree
LCRS (Left Child, Right Sibling) tree.
https://stackoverflow.com/questions/14015525/what-is-the-left-child-right-sibling-representation-of-a-tree-why-would-you-us
## List algorithms
### Linear search
Scans a list starting from the beginning to find `value`. If `value` exists in the list more than once, returns the first occurrence of `value`. Linear search DOES NOT require the list to be sorted to find `value`.

A specialized version of linear search exists that returns the LAST occurrence of `value`.

### Binary search
Searches a list by splitting a list in half and determining if `value` exists in the left half or the right half. The process repeats itself until the value is found because only two values remain, the left or the right value. Binary search requires a sorted list to determine if `value` exists to the left of the value in the middle of the list or the right of the value in the middle of the list.

### Bubble sort
### Insertion/selection sort
### Merge sort
### Heap sort
### Quick sort

## Tree algorithms
