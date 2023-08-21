function isPrime(num = 0) {
   
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    console.log(`sqrt =>${Math.sqrt(num)}`)
        if(num % i === 0) return false;
    }
    return num > 1;
}

console.log(isPrime(0),  false, "0 is not prime");
console.log(isPrime(1),  false, "1 is not prime");
console.log(isPrime(2),  true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");
