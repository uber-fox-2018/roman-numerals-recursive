function romanNumerals(num) {
    let angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let rom = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  
    for (var i = 0; i < angka.length; i++) {
        if (num - angka[i] >= 0) {
            return rom[i] + romanNumerals(num - angka[i])
        }
    }
    return ""
}

console.log(romanNumerals(4))
console.log(romanNumerals(9))
console.log(romanNumerals(23))
console.log(romanNumerals(1453))
console.log(romanNumerals(3000))