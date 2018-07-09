function romanRecursive(num) {
    let romanObj = {
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
    }
    let containStr = ''
    let recursiveNum;
    for (let key in romanObj) {
        if (num <= 0) {
            return ''
        } else if (num >= romanObj[key]){
            recursiveNum = num - romanObj[key]
            containStr += key
            return containStr + romanRecursive(recursiveNum)
        }
    }
}


console.log(romanRecursive(4));
console.log(romanRecursive(980));
console.log(romanRecursive(150));
