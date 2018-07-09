function to_roman(num) {
    let roman_numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I:1
    }

    let result = ''
    if (num == 0) {
        return ''
    } else {
        for (let i in roman_numerals) {
            while(num >= roman_numerals[i]) {
                result += i
                return result + to_roman(num - roman_numerals[i])
            }
        }    
    }
    
}


// Drive code
// console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))