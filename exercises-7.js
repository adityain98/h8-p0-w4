function urutkanAbjad(str) {
  var sementara = [];
  for(var i = 0; i<str.length; i++){
    
    if(i == 0){
      sementara.push(str[i])
    }
    else{
      
      for(var j = 0; j<sementara.length; j++){
        if(str[i]<sementara[j]){
          sementara.splice(j, 0, str[i]);
          break;
        }
        else if(j == sementara.length - 1){
          sementara.push(str[i]);
          break;
        }
      }
    }
  }
  hasil = sementara.join('')
  return hasil;
}
   
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  