class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
        return this;
    }
    pop() {
        if(this.isEmpty()) return null;

        return this.stack.pop();
    }
    peek() {
        if(this.isEmpty()) return null;

        return this.stack[this.size()  - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }
}