function cariModus(arr) {
    var jumlah = 0;
    var hasil = 0;
    for(var i = 0; i < arr.length; i++){
        var sementara = 0;
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                sementara = sementara + 1;
            }
        }
        if(sementara > hasil){
            jumlah = jumlah + sementara;
            hasil = arr[i];
        }
    }
    if(jumlah == 1){
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