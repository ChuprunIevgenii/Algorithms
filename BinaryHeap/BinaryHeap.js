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

        let removedMax = this.heap[0];;
        this.heap[0] = this.heap.pop();
        
        let targetIndex = 0;

        while(true) {
            let leftChildIndex = targetIndex * 2 + 1;
            let rightChildIndex =  targetIndex * 2 + 2;
            
            let largerChildIndex;
            let leftChild = this.heap[leftChildIndex];
            let rightChild = this.heap[rightChildIndex];

            if(leftChild && rightChild) {
                largerChildIndex = leftChild > rightChild ? leftChildIndex : rightChildIndex
            } else if(leftChild && !rightChild) {
                largerChildIndex = leftChildIndex;
            } else {
                break;
            }

            if(this.heap[targetIndex] < this.heap[largerChildIndex]) {
                this.#swap(targetIndex, largerChildIndex);
                targetIndex = largerChildIndex;
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

