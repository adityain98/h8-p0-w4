function cariModus(arr) {
    var sementara = [];
    var jumlah = [];
    var hasilSementara = 0;
    var hasil = 0;
    
    for(var i = 0; i<arr.length; i++){
        if(i == 0){
            sementara.push(arr[i]);
            jumlah.push(1);
        }
        else{
            var isDuplicate = false;
            for(var j = 0; j<sementara.length; j++){
                if(arr[i] == sementara[j]){
                    jumlah[j] += 1;
                    isDuplicate = true;
                }
            }
            if(isDuplicate == false){
                sementara.push(arr[i]);
                jumlah.push(1);
            }
        }
    }
    for(var i = 0; i<jumlah.length; i++){
        if(jumlah[i] > hasilSementara){
            hasilSementara = jumlah[i];
            hasil = sementara[i];
        }
    }
    if(hasilSementara == 1){
        return -1;
    }
    else if(sementara.length == 1){
        return -1;
    }
    else{
        return hasil;
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1