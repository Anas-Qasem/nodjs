bubbleSort = (arr = []) => {
  let swap ;
  do {
    swap = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > arr[index + 1]) {
        //               x =        x +             y
        // swap        15          5              10
        arr[index] = arr[index] + arr[index + 1];
        arr[index + 1] = arr[index] - arr[index + 1];
        arr[index] = arr[index] - arr[index + 1];
        swap = true;
      }
    }
  } while (swap);
  return arr;
};
console.log(bubbleSort([2, 1, 3]));
console.log(bubbleSort([34, 203, 3, 746, 200, 984, 198, 764, 9]));

// time complexity => best = O(n)
//        average/worst => O(n^2)
