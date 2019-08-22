function graduates (students) {
    var hasil = {};
    var sementara = {};
    var nama = [];
    var kelas = [];
    var nilai = [];
    var jumlah = [];

    for(var i = 0; i<students.length; i++){
      if(i == 0){
        kelas.push(students[i].class);
        if(students[i].score >= 75){
          nama.push(students[i].name);
          nilai.push(students[i].score);
          jumlah.push(1);
        }
        else{
          jumlah.push(0);
        }
      }
      else{
        var sama = false;
        for(var j = 0; j<kelas.length; j++){
          if(students[i].class == kelas[j]){
            sama = true;
            if(students[i].score >= 75){
              nama.push(students[i].name);
              nilai.push(students[i].score);
              jumlah[j] += 1
            }
          }
        }
        if(sama == false){
          kelas.push(students[i].class);
            if(students[i].score >= 75){
              nama.push(students[i].name);
              nilai.push(students[i].score);
              jumlah.push(1)
            }
            else{
              jumlah.push(0)
            }
        }
      }
    }
    console.log(kelas);
    console.log(nama);
    console.log(jumlah);
    return nilai
    
    
  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}