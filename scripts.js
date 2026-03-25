function fibs(number){ //arg is how many numbers of sequence are shown.
    let arr = [];
    let previous = null;
    let current = null;
    for(let i = 0; i < number; i++){
        if(i == 0){
            arr.push(0);
        }
        else if(i == 1){
            arr.push(1);
        }
        else{
            current = arr[i-1]; previous = arr[i-2];
            arr.push(current + previous);
        }
    }
    return arr;
}


// i had to look this up because I'm an idiot.
function fibsRec(number){
    if(number === 0)
        return [0];
    if(number === 1)
        return [0, 1];
    
    let arr = fibsRec(number-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}


// MERGE SORT - takes an array and returns sorted array using recursion
// ALSO LOOKED THIS UP BECAUSE THIS IS RETARDED. 
// HOW THE FUCK IS ANYONE MEANT TO JUST FIGURE THAT OUT FUCL
function mergeHelper(left, right){
    let result = [];
    while (left.length && right.length) {
        // Compare the first elements of each and push the smaller one
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // Concatenate any remaining elements
    return [...result, ...left, ...right];
}
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2)
    // recurisvely sort both halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeHelper(left, right);
}


console.log(mergeSort([5,3,2,3,1]));