function cariMedian(arr) {
    var hasil = 0;
    if(arr.length % 2 == 0){
        var i = arr[arr.length / 2];
        var j = arr[arr.length / 2 - 1];

        hasil = i - (i-j)/2;
        return hasil;

    }
    else if(arr.length % 2 == 1){
        hasil = arr.length / 2 - 0.5;
        return arr[hasil];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

