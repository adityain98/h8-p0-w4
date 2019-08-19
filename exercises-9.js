function checkAB(num) {
    var hasil = false;
    for(var i = 0; i<num.length; i++){
        var j = i + 4
        if(num[i] == 'a'){
            if(num[j] == 'b'){
                hasil = true;
                return hasil;
            }
        
        }
        else if(num[i] == 'b'){
            if(num[j] == 'a'){
                hasil = true;
                return hasil;
            }
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false