function highestScore (students) {
    var hasil = {};
    var nilaiTinggi = {};
    var kelas = [];
    var nama = [];
    var nilai = [];

    for(var i = 0; i<students.length; i++){
        if(i == 0){
            kelas.push(students[i].class);
            nama.push(students[i].name);
            nilai.push(students[i].score);
            
        }
        else{
            var sama = false;
            var nilaiKecil = false;
            for(var j = 0; j<kelas.length; j++){
                if(students[i].class == kelas[j]){
                    if(students[i].score > nilai[j]){
                        nilai[j] = students[i].score
                        sama = true;
                    }
                    else{
                        nilaiKecil = true;
                    }
                }
            }
            if(sama == false && nilaiKecil == false){
                kelas.push(students[i].class);
                nama.push(students[i].name);
                nilai.push(students[i].score);
            }
        }
    }
    
    
    

    for(var i = 0; i<kelas.length; i++){
        nilaiTinggi = {};
        nilaiTinggi.name = nama[i];
        nilaiTinggi.score = nilai[i];
        hasil[kelas[i]] = nilaiTinggi;
    }
    return hasil;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}