function toRoman(num) {
    let romans = {
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
    let result = '';

    if (num === 0) {
        return '';
    } else {
        for (let key in romans) {
            if (num >= romans[key]) {
                result += key
                return result + toRoman(num - romans[key]);
            }
        }
    }
}

console.log(toRoman(973));
console.log(toRoman(541));
console.log(toRoman(1453));