function isEmpty(obj){
  for(var a in obj) {
    if(obj.hasOwnProperty(a)){
      return false;
    }
  }
  return true;
}

function graduates (students) {
  var kelas = [];
  var nama = {};
  var hasil = {};

  for(var i = 0; i<students.length; i++){
    nama = {};
    kelas = [];
    if(isEmpty(hasil) == true){
      if(students[i].score > 74){
        nama.name = students[i].name;
        nama.score = students[i].score;
        kelas.push(nama);
        hasil[students[i].class] = kelas;
      }
    }
    else{
      var isDuplicate = false;
      if(students[i].score > 74){
        for(var a in hasil){
          if(a == students[i].class){
            nama.name = students[i].name;
            nama.score = students[i].score;
            hasil[a].push(nama);
            isDuplicate = true;
          }
        }
        if(isDuplicate == false){
          nama.name = students[i].name;
          nama.score = students[i].score;
          kelas.push(nama);
          hasil[students[i].class] = kelas;
        }
      }
    }
  }
  return hasil;
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