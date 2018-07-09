function toRoman(angka) {

    var str= ''
    var deretA= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] 
    var deretR= ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    
    for (var i= 0; i<deretA.length; i++) {
        
        if (angka-deretA[i] >=0) {
            return deretR[i] + toRoman(angka-deretA[i])
        }
    
    }
    return ''
}


console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|-------')
console.log ('4     | IV       | ', toRoman(4))
console.log ('9     | IX       | ',  toRoman(9))
console.log ('23    | XXIII    | ',  toRoman(23))
console.log ('1453  | MCDLIII  | ',  toRoman(1453))
console.log ('1646  | MDCXLVI  | ', toRoman(1646))



