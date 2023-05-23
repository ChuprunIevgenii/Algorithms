function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotIndex = start;
    
    for (let i = start + 1; i <= end; i++) {
        if(arr[start] > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    swap(arr, start, pivotIndex)
    
    return pivotIndex;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    
    return arr;
} 

