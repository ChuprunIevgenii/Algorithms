class IndexedBinaryHeap { 
    constructor() {
        this.positions = {}; // value => key
        this.values = [];
        this.isMax = true; // max binary heap
    }
    enqueue(value) {
        this.values.push(value);
        this.positions[value] = this.values.length - 1;
        this.bubbleUp();
        return this;
    }
    dequeue(value) {

        if(!this.contains(value)) return false;

        const currentIndex = this.positions[value];
        const lastIndex = this.values.length - 1;
        const parentIndex = Math.ceil(currentIndex / 2) - 1;
        
        // delete
        this.swap(currentIndex, lastIndex);
        delete this.positions[value];
        this.values.pop();

        //tweak invariant
        if(this.values[currentIndex] <= this.values[parentIndex]) {
            this.bubbleUp(currentIndex);
        } else {
            this.bubbleDown(currentIndex);
        }

        return true;
    }
    contains(value) {
        return this.positions[value] !== undefined;
    }
    heapify() {}
    sort() {}
    swap(index1, index2, data = this.values) {
        const value1 = data[index1];
        const value2 = data[index2]
        
        data[index1] = value2;
        data[index2] = value1;
        
        this.positions[value1] = index2;
        this.positions[value2] = index1;        
    }
    bubbleUp(index = this.values.length - 1) {
        let currentIndex = index;

        while(currentIndex > 0) {
            const parentIndex = Math.ceil(currentIndex / 2) - 1;

            if(this.values[currentIndex] <= this.values[parentIndex]) return;
            
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }
    bubbleDown(index) {
        let parentIndex = index;
        
        while(parentIndex < this.values.length) {
            
            const leftChildIndex = parentIndex * 2 + 1;
            const rightChildIndex = parentIndex * 2 + 2;
            
            const leftChildValue = this.values[leftChildIndex];
            const rightChildValue = this.values[rightChildIndex];
            
            let childLargestIndex = null;
        
            if(leftChildValue !== undefined && rightChildValue !== undefined) {
                childLargestIndex = leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex;
            } else if(leftChildValue !== undefined) {
                childLargestIndex = leftChildIndex;
            }

            if(childLargestIndex === null || this.values[parentIndex] > this.values[childLargestIndex]) {
                return;
            }

            this.swap(childLargestIndex, parentIndex);

            parentIndex = childLargestIndex;
        }
   }
}

const maxHeap = new IndexedBinaryHeap();

maxHeap.enqueue(20).enqueue(16).enqueue(24).enqueue(25).enqueue(100);
console.log(maxHeap.values);
console.log(maxHeap.dequeue(100))
console.log(maxHeap.values);
console.log(maxHeap.positions);