function romawix (param){
    var tampung = []
    var angka = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var romawi = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    
  if (param ==0){
    return ''
  }
  else {
    for (var i=0 ; i < angka.length ; i++){
     if (param >= angka[angka.length-1-i]){
      return romawi[romawi.length -1 -i] + romawix(param-angka[angka.length-1-i])
      }
    }
  }
    
  }
  
  console.log('4   |IV    |',romawix(4)) //IV
  console.log('9   |IX    |',romawix(9)) //IX
  console.log('23   |XXIII    |',romawix(23)) //XXIII
  console.log('1453   |MCDLIII    |',romawix(1453)) //'MCDLIII'
  console.log('1646   |MDCXLVI    |',romawix(1646)) //MDCXLVI