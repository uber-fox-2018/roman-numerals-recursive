const toRoman = (number) => {
  const converter = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let str = '';
  if (number <= 0) {
    return str;
  }

  for (let i in converter){
    if (number >= converter[i]){
      str += i;
      return str + toRoman(number -= converter[i]);
    }
  }
}


console.log(toRoman(121))