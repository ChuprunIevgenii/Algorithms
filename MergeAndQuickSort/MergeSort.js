function merge(array1 = [], array2 = []) {
    const result = [];
    let i = 0;
    let j = 0;

    while(i !== array1.length && j !== array2.length) {
        if(array1[i] <= array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    for(; i < array1.length; i++) {
        result.push(array1[i]);
    }

    for(; j < array2.length; j++) {
        result.push(array2[j]);
    }
    
    return result;
}

function MergeSort(array) {
    if(array.length <= 1) return array;
    
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    return merge(MergeSort(left), MergeSort(right));
}

