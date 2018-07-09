function toRomanRec(num){
    let decimal= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "VI", "I"];
    let result = "";
    if(num===0){
        return "";
    }
    for(let i=0;i<decimal.length;i++){
        if(num>=decimal[i]){
            result += roman[i];
            num -= decimal[i];
            break;
        }
    }

    return result + toRomanRec(num);
}
console.log(toRomanRec(1));//I
console.log(toRomanRec(5));//V
console.log(toRomanRec(10));//X
console.log(toRomanRec(50));//L
console.log(toRomanRec(100));//C
console.log(toRomanRec(500));//D
console.log(toRomanRec(1000));//M
console.log(toRomanRec(23));//XXIII
console.log(toRomanRec(1453));//MCDLIII
console.log(toRomanRec(1646));//MDCXLVI
console.log(toRomanRec(2999));//MMCMXCIX
console.log(toRomanRec(3000));//MMM