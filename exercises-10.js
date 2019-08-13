function changeMe(arr) {
    var j = 0;
    for(var i = 0; i<arr.length; i++){
            var orang = {
                firstName: arr[i][j],
                lastName: arr[i][j+1],
                gender: arr[i][j+2],
                age: 2019 - arr[i][j+3]
            }
            if(isNaN(orang.age) == true){
                orang.age = 'Invalid Birth Year';
            }
            console.log(i+1+'.' , orang.firstName, orang.lastName+':');
            console.log(orang)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""