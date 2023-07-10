class BinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(element) {
        if(!element) return;
        this.heap.push(element);

        let newElementIndex = this.heap.length - 1;
        let parentElementIndex = Math.floor(newElementIndex / 2);

        while(this.heap[parentElementIndex] && this.heap[newElementIndex] > this.heap[parentElementIndex]) {
            this.#swap(newElementIndex, parentElementIndex);
            newElementIndex = parentElementIndex;
            parentElementIndex =  Math.floor(newElementIndex / 2);
        }
    }
    remove() {
        if(!this.heap.length) return;

        let targetElementIndex = 0;

        this.#swap(targetElementIndex, this.heap.length -1);
        this.heap.pop();


        while(true) {
            let targetChildLeftIndex = targetElementIndex * 2 + 1;
            let targetChildRightIndex = targetElementIndex * 2 + 2;
            const targetChildLeftElement = this.heap[targetChildLeftIndex];
            const targetChildRightElement = this.heap[targetChildRightIndex]
            
            if(!targetChildLeftElement && !targetChildRightElement) return;

            let targetChildIndex;

            if(targetChildLeftElement && targetChildRightElement) {
                targetChildIndex = targetChildLeftElement > targetChildRightElement ? targetChildLeftIndex : targetChildRightIndex;
            } else if(targetChildLeftElement) {
                targetChildIndex = targetChildLeftIndex;
            } else {
                targetChildIndex = targetChildRightIndex;
            }
            
            if(this.heap[targetElementIndex] >= this.heap[targetChildIndex]) return;

            this.#swap(targetElementIndex, targetChildIndex);
            targetElementIndex = targetChildIndex;

        }

    }
    sort() {

    }
    buildHeap() {
        
    }
    #heapify() {

    }
    #swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2]; 
        this.heap[index2] = temp;
    }

}