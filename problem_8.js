secondMax = (arr =[])=>{
    let max = arr[0];
    let secondMax = Number.MIN_SAFE_INTEGER;
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
    if (secondMax === Number.MIN_SAFE_INTEGER) {
        if (arr.length === 1) {
            secondMax = max;
        } else {
            secondMax = arr[arr.length -2] ;
        }
    }
    return secondMax;
    
}
// console.log( secondMax([1,5, 2])) //== 2
console.log( secondMax([37,12,21,26,28,7,3,2,25,8,36,26,19,17,2,37])) //== 36
// console.log( secondMax([-1, -5, 2])) //== -1
// console.log( secondMax([-3, -2, -7])) // == -3
// console.log(secondMax([99 , 7 , 6, -33 , 114])) ; // ==99\

