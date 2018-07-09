/*
1 : I
2 : II
3 : III
========
4 : IV
========
5 : V
6 : VI
7 : VII
8 : VIII
========
9 : IX
========
10: X
========
*/


function to_roman(num) {
  const angkaRomawi = { 
    'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,   
    'C': 100, 'XC': 90, 'L': 50, 'XL': 40,   
    'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1   
  }
  let romanStr = ''

  if (num === 0) {
    return ''
  }

  for (let key in angkaRomawi) {
    if (num >= angkaRomawi[key]) {
      return key + to_roman(num - angkaRomawi[key])
    }
  }

}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('3000  | MMM      | ', to_roman(3000))
console.log('3505  | MMMDV    | ', to_roman(3505))