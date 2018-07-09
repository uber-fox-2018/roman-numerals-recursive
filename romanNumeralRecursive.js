function toRoman(num){
	var roman=['M','D','CD','C','XC','L','XL','X','IX','V','IV','I']
	var angka = [1000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	var result=''

	if 	(num == 0){
		return result
	}
	for (var i = 0; i < angka.length ; i++){
		if (num >= angka[i]){
			num -= angka[i]
			result+=roman[i]
			i-=1
		}
	}
	return result + toRoman(num)
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))
// console.log(toRoman(3000))