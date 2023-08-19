
function isPalindrome( str = "Race car") {
    let isPalindrome = true;
    let indexFromStart = 0;
    str = str.replace(/[^A-Z0-9]/ig, "");
    for (let index = str.length-1; index >= 0; index--) {
    if (str[index].toLocaleLowerCase() != str[indexFromStart].toLocaleLowerCase()) {
        isPalindrome = false;
        break;
    }
    indexFromStart++;
    }
    return isPalindrome;
}
console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(isPalindrome('Race car')); // Output: true
console.log(isPalindrome('Hello, world!')); // Output: false