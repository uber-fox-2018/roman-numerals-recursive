function roman_numeral_rec(num) {
    let data = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    if (num == 0) return ''

    for (let a = 0; a < data.length; a++) {
        if (num >= data[a]) {
            return roman[a] + roman_numeral_rec(num - data[a])
        }
    }
}


console.log(roman_numeral_rec(4));
console.log(roman_numeral_rec(9))
console.log(roman_numeral_rec(23))
console.log(roman_numeral_rec(1453))
console.log(roman_numeral_rec(1646))
