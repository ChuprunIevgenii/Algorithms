class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        if(!value) return;
        this.heap.push(value);
        let newElementIndex = this.heap.length - 1;

        while(true) {
            parentIndex =  Math.floor((newElementIndex - 1) / 2);

            if(this.heap[newElementIndex] > this.heap[parentIndex]) {
                this.#swap(newElementIndex, parentIndex);
                newElementIndex = parentIndex;
            } else { 
                return this;
            }
           
        }
    }
    delete() {
        if(!this.heap.length) return;
        if(this.heap.length && this.heap.length < 3) return this.heap.shift();

        let targetIndex = 0;
        let lastIndex = this.heap.length - 1;

        this.#swap(targetIndex, lastIndex);
        let removedMax = this.heap.pop();
        

        while(true) {
            let leftChildIndex = targetIndex * 2 + 1;
            let rightChildIndex =  targetIndex * 2 + 2;
            let targetChildIndex;

            if(this.heap[leftChildIndex] && !this.heap[rightChildIndex]) {
                targetChildIndex = leftChildIndex;
            } else if(this.heap[leftChildIndex] && this.heap[rightChildIndex]) {
                targetChildIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex
            } else {
                break;
            }

            if(this.heap[targetIndex] < this.heap[targetChildIndex]) {
                this.#swap(targetIndex, targetChildIndex);
                targetIndex = targetChildIndex;
            } else {
                break;
            }
        }

        return removedMax;
    }
    #swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
}

