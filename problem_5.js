const commonCharacters = (arr = []) => {
  // get minmun item len
  var minmunStringLen = arr.reduce((a, b) => (a.length <= b.length ? a : b));
  // remove the minmun String Len
  arr = arr.filter((item) => item !== minmunStringLen);
  isCharExsit = (value, char) => value.includes(char);
  let output = "";
  for (let i = 0; i < minmunStringLen.length; i++) {
    let char = minmunStringLen[i];
    if (arr.every((value)=>isCharExsit(value,char))) {
        output += char;
    }
  }
  console.log(output);
};

commonCharacters(["acexivbou", "aegihobu","aib"]);
