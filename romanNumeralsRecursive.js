function toRoman(num){
    // var resultNum = num
    // var resultStr = ''
    // var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    // var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    // for(var i = 0 ; i < angka.length ; i++){
    //     for(var j = 0 ; j < angka.length ; j++){
    //         if(resultNum >= angka[i]){
    //             resultNum-=angka[i]
    //             resultStr+=romawi[i]
    //         }
    //     }
    // }
    // return resultStr
    var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var result = ''
    if(num === 0){
        return result
    }else{
        for(var i = 0 ; i < angka.length ; i++){
            if(num >= angka[i]){
                result+=romawi[i]
                return result + toRoman(num-angka[i])
            }
        }
    }
}
console.log(toRoman(1646))