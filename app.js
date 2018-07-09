function toRoman(number) {
    return toRomanChunk(number, []);
}

function toRomanChunk(number, str) {
    const roman1 = 'I';
    const roman4 = 'IV';
    const roman5 = 'V';
    const roman9 = 'IX'
    const roman10 = 'X';
    const roman40 = 'XL';
    const roman50 = 'L';
    const roman90 = 'XC';
    const roman100 = 'C';
    const roman400 = 'CD';
    const roman500 = 'D';
    const roman900 = 'CM';
    const roman1000 = 'M';

    if (number === 0) {
        return str.join('');
    }
    else if (number <= 3000 && number >= 1000) {
        str.push(roman1000);
        return toRomanChunk(number-1000, str);
    }
    else if (number < 1000 && number >= 900) {
        str.push(roman900);
        return toRomanChunk(number-900, str);
    }
    else if (number < 900 & number >= 500) {
        str.push(roman500);
        return toRomanChunk(number-500, str)
    }
    else if (number < 500 && number >= 400) {
        str.push(roman400);
        return toRomanChunk(number-400, str);
    }
    else if (number < 400 && number >= 100) {
        str.push(roman100);
        return toRomanChunk(number-100, str);
    }
    else if (number < 100 && number >= 90) {
        str.push(roman90);
        return toRomanChunk(number-90, str);
    }
    else if (number < 90 && number >= 50) {
        str.push(roman50);
        return toRomanChunk(number-50, str);
    }
    else if (number < 50 && number >= 40) {
        str.push(roman40);
        return toRomanChunk(number-40, str);
    }
    else if (number < 40 && number >= 10) {
        str.push(roman10);
        return toRomanChunk(number-10, str);
    }
    else if (number === 9) {
        str.push(roman9);
        return toRomanChunk(number-9, str);
    }
    else if (number < 9 && number >= 5) {
        str.push(roman5)
        return toRomanChunk(number-5, str);
    }
    else if (number == 4) {
        str.push(roman4);
        return toRomanChunk(number-4, str);
    }
    else if (number < 4 && number >= 1) {
        str.push(roman1);
        return toRomanChunk(number-1, str);
    }
}
