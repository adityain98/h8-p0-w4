// function sorting(arrNumber) {
//     for(var i = 0; i<arrNumber.length; i++){
//         for(var j = i+1; j<arrNumber.length; j++){
//             if(i < j){
//                 var pindah = arrNumber[i];
//                 arrNumber[i] = arrNumber[j];
//                 arrNumber[j] = pindah;
//             }
//         }
//     }
//     return arrNumber;
//     }
  
// function getTotal(arrNumber) {
//     var hasil = [];
//     var jumlah = [];
//     for(var i = 0; i <arrNumber.length; i++){
//         if(i == 0){
//             hasil.push(arrNumber[i]);
//             jumlah.push(1);
//         }
//         else{
//             var isDuplicate = false;
//             for(var j = 0; j<hasil.length; j++){
//                 if(arrNumber[i] == hasil[j]){
//                     jumlah[j] += 1;
//                     isDuplicate = true;
//                 }
//             }
//             if(isDuplicate == false){
//                 hasil.push(arrNumber[i]);
//                 hasil.push(1);
//             }
//         }
//     }
//     return jumlah;
// }
  
//   function mostFrequentLargestNumbers(arrNumber) {
//     var listSort = sorting(arrNumber);
//     var countHighest = getTotal(listSort);
//     return listSort;
//   }
  
//   console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//   //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
//   console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
//   console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
//   console.log(mostFrequentLargestNumbers([]));
//   //''

var hasil = 0

function coba(num, num2){

    if(num2 == undefined){
        num2 = 6;
        hasil = 0;
    }
    
    if(num2 == 0){
        return hasil;
    }
    else{
        hasil += 1;
        return coba(num, num2 - 1);
    }
}

console.log(coba(5));
