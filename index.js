function toRoman(num) {
    let kamusRomawi = {
        'M':1000,
        'D':500,
        'CD':400,
        'C':100,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1
    }

    let result = ""

    for (key in kamusRomawi) {

        if(num === 0){ //base case ketika num = 0,maka aka return string kosong
            return ''
        } else if (num >= kamusRomawi[key]){ // else if num lebih kecil sama dengan kamusRomawi[key] -> object kamus romawi
            let inputResult = num - kamusRomawi[key] //buat variabel inputresult, dengan isi num - value kamus romawi
            result += key // result sama dengan resut + key
            return  result + toRoman(inputResult) // return result + fungsing(toRoman(insputResult))
            
        }
    }
    
}

// 3 => I



console.log ('My tottaly sweet testing script\n');
console.log(' input  |  expected  |  actual ')
console.log('--------|------------|---------')
console.log(' 4      |  IV        |', toRoman(4))
console.log(' 9      |  IX        |', toRoman(9))
console.log(' 23     |  XXIII     |', toRoman(23))
console.log(' 1453   |  MCDLIII   |', toRoman(1453))
console.log(' 1646   |  MDCXLVI   |', toRoman(1646))