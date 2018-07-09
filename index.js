function toRomanRecursive(number){
    let numerikal = [1000,900,500,400,100,90,50,40,10,9,5,4,1,0];
    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I',''];
    let result =''
    if(number === 0 ){
        return result
    }
    for(let i=0 ; i<numerikal.length ; i++){
        if(number >= numerikal[i]){
            result = result + roman[i];
            return result + toRomanRecursive(number-numerikal[i])
        }
    }
}

console.log('My totally sweet testing script for new roman \n')
console.log('input  |  expected  | actual')
console.log('-------|------------|-------')
console.log('4      |  IV        |', toRomanRecursive(4))
console.log('9      |  IX        |', toRomanRecursive(9))
console.log('23     |  XXIII     |', toRomanRecursive(23))
console.log('1453   |  MCDLIII   |', toRomanRecursive(1453))
console.log('1646   |  MDCXLVI   |', toRomanRecursive(1646))