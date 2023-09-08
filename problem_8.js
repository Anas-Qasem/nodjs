secondMax = (arr =[])=>{
    let max = arr[0];
    let secondMax = 0;
    for (let index = 1; index < arr.length; index++) {
        if (max < arr[index]) {
            secondMax = max;
            max = arr[index];
        } else {
            if (arr[index] > secondMax) {
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
console.log( secondMax([-1,-2,-3])) //== 2
// console.log( secondMax([-1, -5, 2])) //== -1
// console.log( secondMax([-3, -2, -7])) // == -3
// console.log(secondMax([99 , 7 , 6, -33 , 114])) ; // ==99