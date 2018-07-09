function romanNumeralRec(num){
    let angka = num
    let arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let roman = ['M','CM','D','CD','C','XC','L','IX','X','IX','V','IV','I']
    if (num === 0){
        return ''
    }
    for (let i = 0; i < arabic.length; i++){
        if (num>=arabic[i]){
            return roman[i] + romanNumeralRec(num-arabic[i])
        }
    }
}

console.log(romanNumeralRec(1453))