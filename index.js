function romansNumeralRekursif(number) {
    let romans = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    let output = ''

    if (number <= 0) {
       return output 
    }else {
        for (let i = 0; i < romans.length; i++) {
            if (number >= romans[i][0]) {
                output += romans[i][1]
                number -= romans[i][0]
                return output + romansNumeralRekursif(number)
            }
        }
    }
}

console.log(romansNumeralRekursif(4));
console.log(romansNumeralRekursif(9));
console.log(romansNumeralRekursif(23));
console.log(romansNumeralRekursif(1453));
console.log(romansNumeralRekursif(1646));