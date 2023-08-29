
// ============== Solution One ==============

function getUniqueValuesOne(arr = []) {
    //    using set 
    let set = new Set(arr); // => O(1) or O(logN)
    return Array.from(set); // => O(n)
    //    Time complexity => O(logN)
}
// ============== Solution Two ==============

function getUniqueValuesTwo(arr = []){
    // sort the array
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
      }
    // get Unique Values
    let finalArray = [];
    finalArray.push(arr[0]);
    let indexDiffrenet = 1;
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] != finalArray[index-indexDiffrenet] ) {
            finalArray.push(arr[index]);
        }else {
            indexDiffrenet++;
        }
    }
    return finalArray;
}
const arrOfNum = [1, 6, 6, 4, 5, 7, 7];
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]