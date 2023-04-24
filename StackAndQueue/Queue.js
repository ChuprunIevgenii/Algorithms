class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) {
        this.queue.push(value);
        return this;
    }
    dequeue() {
        if(this.isEmpty()) throwError();

        return this.queue.shift();
    }
    front() {
        if(this.isEmpty()) throwError();

        return this.queue[0];
    }
    rear() {
        if(this.isEmpty()) throwError();

        return this.queue[this.queue.length - 1];
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    throwError() {
        throw new Error("Queue is empty!");
    }
}