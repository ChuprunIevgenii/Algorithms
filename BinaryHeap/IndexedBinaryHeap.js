class IndexedBinaryHeap { 
    constructor() {
        this.positions = {}; // value => key
        this.values = [];
        this.isMax = true; // max binary heap
    }
    enqueue(value) {
        const length = this.values.push(value);
        const index = length - 1;
        positions[index] = value;
        this.bubbleUp();
    }
    dequeue() {

    }
    contains(key) {
        return !!this.positionMap[key];
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

        while(currentIndex >= 0) {
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
                childLargestIndex = leftChildValue;
            }

            if (largestChildIndex === null || this.values[parentIndex] > this.values[largestChildIndex]) {
                return;
            }
            
            this.swap(childLargestIndex, parentIndex);
            parentIndex = childLargestIndex;
        }
   }
}