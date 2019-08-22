function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    var sementara = {};
    var jarak = 0;
    var naik = 0;
    var turun = 0;

    for(var i = 0; i<arrPenumpang.length; i++){
        naik = 0;
        turun = 0;
        jarak = 0;
        sementara = {};
        for(var j = 0; j<rute.length; j++){
            for(var k = j+1; k<rute.length; k++){
                if(arrPenumpang[i][1] == rute[j]){
                    naik = j;
                    if(arrPenumpang[i][2] == rute[k]){
                        turun = k;
                        jarak = k - j
                        sementara.penumpang = arrPenumpang[i][0];
                        sementara.naikDari = arrPenumpang[i][1];
                        sementara.tujuan = arrPenumpang[i][2];
                        sementara.bayar = jarak * 2000;
                        hasil.push(sementara);
                    }
                }
            }
        }
    }
    return hasil;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]