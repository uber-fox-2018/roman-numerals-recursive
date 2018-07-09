function toRoman(num){
    let numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    
    numbers.reverse()
    roman.reverse()

    if(num === 0){
      return ''
    } else {  
      for(var i = 0; i < numbers.length; i++){
        if(num >= numbers[i]){
          var remains = num - numbers[i]
          return roman[i] + toRoman(remains)
        }
      }
    }
}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|--------')
console.log('4     | IV       |', toRoman(4))
console.log('9     | IX       |', toRoman(9))
console.log('23    | XXIII    |', toRoman(23))
console.log('1453  | MCDLIII  |', toRoman(1453))
console.log('1646  | MDCXLVI  |', toRoman(1646))