// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False



var MyStack = function() {
    this.queue = {};
    this.queue.fifo = null;
    this.queue.size = 0;
    this.queue.push = function (x) {
        if (!this.size) {
            this.fifo = {val: x, next: null};
        } else {
            let cur = this.fifo;
            while (cur.next) {
                cur = cur.next;
            };
            cur.next = {val: x, next: null};
        };
        this.size += 1;
    };
    this.queue.pick = function () {
        let cur = this.fifo;
        this.fifo = this.fifo.next;
        this.size -= 1;
        return cur.val;
    };
    this.queue.isEmpty = function() {
        return this.size === 0;
    };
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function() {
    for(let i = 1; i < this.queue.size; i++) {
        this.queue.push(this.queue.pick());
    };
    return this.queue.pick();
};

MyStack.prototype.top = function() {
    for(let i = 1; i < this.queue.size; i++) {
        this.queue.push(this.queue.pick());
    };
    let top = this.queue.pick();
    this.queue.push(top);
    return top;
};

MyStack.prototype.empty = function() {
    return this.queue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */