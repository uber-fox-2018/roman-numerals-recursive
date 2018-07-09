function toRoman(input) {
    let number = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
    let romawi = ["M", "CM", "D", "CD", "C", "L", "XL","X", "IX", "V", "IV", "I"]
    let strResult = ""
    let i = 0;
    while (i < romawi.length){
      if(input == 0){
        return ''
      }else if (input >= number[i]) {
        var inputStr = input-number[i]
        strResult += romawi[i]
        return strResult + toRoman(inputStr)
      }
      i++
    }
  }

// console.log(toRoman(7))

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_________');
console.log('4     |IV        |', toRoman(4));
console.log('9     |IX        |', toRoman(9));
console.log('23    |XXIII     |', toRoman(23));
console.log('1453  |MCDLIII   |', toRoman(1453));
console.log('1646  |MCDXLVI   |', toRoman(1646));
