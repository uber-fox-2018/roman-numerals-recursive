// panduan untuk angka romawi ada di : https://id.wikipedia.org/wiki/Angka_Romawi

function toRoman(num) {
    if(num == 0) {
        return "";
    } else {
        let hasil = '';
        
        if(num >= 1000) {
            hasil = hasil + "M";
            num = num - 1000;
        }

        if(num >= 900) {
            hasil = hasil + "CM";
            num = num - 900;
        }

        if(num >= 500) {
            hasil = hasil + "D";
            num = num - 500;
        }

        if(num >= 400) {
            hasil = hasil + "CD";
            num = num - 400;
        }

        if(num >= 100) {
            hasil = hasil + "C";
            num = num - 100;
        }

        if(num >= 90) {
            hasil = hasil + "XC";
            num = num - 90;
        }

        if(num >= 50) {
            hasil = hasil + "L";
            num = num - 50;
        }

        if(num >= 40) {
            hasil = hasil + "XL";
            num = num - 40;
        }

        if(num >= 10) {
            hasil = hasil + "X";
            num = num - 10;
        }

        if(num == 9) {
            hasil = hasil + "IX";
            num = num - 9;
        }

        if(num >= 5) {
            hasil = hasil + "V";
            num = num - 5;
        }

        if(num == 4) {
            hasil = hasil + "IV";
            num = num - 4;
        }

        if(num >= 1) {
            hasil = hasil + "I";
            num = num - 1;
        }

        return hasil = hasil + toRoman(num);
    }

}
           
console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));