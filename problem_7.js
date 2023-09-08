balancedParens = (str = "") => {
  const bracketRegex = /[\[\]{}()]/g;
  const brackets = str.match(bracketRegex);
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let char of brackets) {
    if (bracketPairs[char]) {
      stack.push(char); // Push opening brackets onto the stack
    } else if (Object.values(bracketPairs).includes(char)) {
      // Check if the current character is a closing bracket
      const lastBracket = stack.pop();
      if (bracketPairs[lastBracket] !== char) {
        // If the last bracket on the stack does not match the current closing bracket
        return false; // Brackets are not balanced
      }
    }
  }
  // If the stack is empty at the end, brackets are balanced
  return stack.length === 0;
};

console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }")); // true
console.log(balancedParens(" var hubble = function() { telescopes.awesome();")); // false
console.log(balancedParens('(')); // false
console.log( balancedParens('()')); // true
console.log( balancedParens(')('));  // false
console.log( balancedParens('(())'));  // true
console.log( balancedParens('[](){}')); // true
console.log( balancedParens('[({})]'));   // true
console.log( balancedParens('[(]{)}')); // false
