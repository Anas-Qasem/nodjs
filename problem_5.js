const commonCharacters = (arr = []) => {
  // get minium item len
  var miniumStringLen = arr.reduce((a, b) => (a.length <= b.length ? a : b));
  // remove the minium String Len
  arr = arr.filter((item) => item !== miniumStringLen);
  isCharExist = (value, char) => value.includes(char);
  let output = "";
  for (let i = 0; i < miniumStringLen.length; i++) {
    let char = miniumStringLen[i];
    if (arr.every((value)=>isCharExist(value,char))) {
        output += char;
    }
  }
  console.log(output);
};

commonCharacters(["acexivbou", "aegihobu","aib"]);
