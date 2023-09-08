secondMax = (arr =[])=>{
    let max = arr[0];
    let secondMax = 0;
    for (let index = 1; index < arr.length; index++) {
        if (max < arr[index]) {
            secondMax = max;
            max = arr[index];
        } else {
            if (arr[index] > secondMax &&  arr[index] < max) {
                secondMax = arr[index];
            }
         
        }
    }
    // that mean array is already sorted or there is only on item
    if (secondMax == 0) {
        if (arr.length === 1) {
            secondMax = max;
        } else {
            secondMax = arr[arr.length -2] ;
        }
    }
    return secondMax;
    
}
// console.log( secondMax([1,5, 2])) //== 2
console.log( secondMax([8,26,44,-17,24,44,-4,-1,7,-9,20,28,27,8,43])) //== 2
// console.log( secondMax([-1, -5, 2])) //== -1
// console.log( secondMax([-3, -2, -7])) // == -3
// console.log(secondMax([99 , 7 , 6, -33 , 114])) ; // ==99