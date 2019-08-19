function ubahHuruf(kata) {
    var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var word = kata.split('');
    var hasil = '';
    for(var i = 0; i<word.length; i++){
        for(var j = 0; j<huruf.length; j++){
            if(word[i] == huruf[j]){
                if (j == huruf.length -1){
                    hasil = hasil + huruf[0];
                    break;
                }
                hasil = hasil + huruf[j+1];
                break;
            }
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu