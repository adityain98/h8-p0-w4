function digitPerkalianMinimum(angka) {
  var hasil = Math.pow(10, 100);
  for(var i = 1; i <= angka; i++){
    var sementara = 0;
    var pembagi = angka / i;
    var arrPembagi = pembagi.toString().split('');
    var arrI = i.toString().split('');
    if(angka % i == 0){
      sementara = arrPembagi.length + arrI.length;
      if(sementara < hasil){
        hasil = sementara;
      }
    }
  }
  return hasil;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2