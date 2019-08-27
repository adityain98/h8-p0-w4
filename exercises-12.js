// function countProfit(shoppers) {
//     let listBarang = [ 
//         ['Sepatu Stacattu', 1500000, 10],
//         ['Baju Zoro', 500000, 2],
//         ['Sweater Uniklooh', 175000, 1]
//     ];

//     var sepatu = {
//         product: listBarang[0][0],
//         shoppers: [],
//         leftOver: listBarang[0][2],
//         totalProfit: 0
//     };

//     var baju = {
//         product: listBarang[1][0],
//         shoppers: [],
//         leftOver: listBarang[1][2],
//         totalProfit: 0
//     }

//     var sweater = {
//         product: listBarang[2][0],
//         shoppers: [],
//         leftOver: listBarang[2][2],
//         totalProfit: 0
//     }

//     var hasil = [sepatu, baju, sweater]
//     for(var i = 0; i<shoppers.length; i++){
//         if(shoppers[i].product == 'Sepatu Stacattu'){
//             if(sepatu.leftOver >= shoppers[i].amount){
//                 sepatu.shoppers.push(shoppers[i].name);
//                 sepatu.leftOver -= shoppers[i].amount;
//                 sepatu.totalProfit += (shoppers[i].amount * 1500000)
//             }
//         }
//         else if(shoppers[i].product == 'Baju Zoro'){
//             if(baju.leftOver >= shoppers[i].amount){
//                 baju.shoppers.push(shoppers[i].name);
//                 baju.leftOver -= shoppers[i].amount;
//                 baju.totalProfit += (shoppers[i].amount * 500000)
//             }
//         }
//         else if(shoppers[i].product == 'Sweater Uniklooh'){
//             if(sweater.leftOver >= shoppers[i].amount){
//                 sweater.shoppers.push(shoppers[i].name);
//                 sweater.leftOver -= shoppers[i].amount;
//                 sweater.totalProfit += (shoppers[i].amount * 175000)
//             }
//         }
//     }
    
//     return hasil;
//   }


// function countProfit(shoppers) {
//     let listBarang = [ 
//         ['Sepatu Stacattu', 1500000, 10],
//         ['Baju Zoro', 500000, 2],
//         ['Sweater Uniklooh', 175000, 1]
//     ];
//     var result = [];

//     for (var i = 0; i < listBarang.length; i++) {
//     var nama = [];
//     var hasil = {}
//         for (var j = 0; j < shoppers.length; j++){
//             if(shoppers[j].product == listBarang[i][0]){
//                 if(listBarang[i][2] - shoppers[j].amount >= 0){
//                     listBarang[i][2] -= shoppers[j].amount;
//                     if(result.length == 0){
//                     hasil.product = shoppers[j].product;
//                     nama.push(shoppers[j].name)
//                     hasil.jumlah = listBarang[i][2];
//                     }
//                     else{
//                         var isDuplicate = false;
//                         for (var k = 0; k <result.length; k++){
//                             if(result[k].product == shoppers[j].product){
//                                 nama.push(shoppers[j].name)
//                                 hasil.jumlah = listBarang[i][2];
//                                 isDuplicate = true;
//                             }
//                         }

//                         if(isDuplicate == false){
//                             hasil.product = shoppers[j].product;
//                             nama.push(shoppers[j].name)
//                             hasil.jumlah = listBarang[i][2];
//                         }
//                     }
//                 }
//             }
//         }
//         if(nama.length > 0){
//             hasil.nama = nama;
//         }
//         result.push(hasil)
//     }
//     return result
// }

function countProfit(shoppers) {
    // let listBarang = [ 
    //     ['Sepatu Stacattu', 1500000, 10],
    //     ['Baju Zoro', 500000, 2],
    //     ['Sweater Uniklooh', 175000, 1]
    // ];

    var data = {
        sepatuStacattu: {
            produk: 'Sepatu Stacattu',
            harga: 1500000,
            jumlah: 10
        },
        bajuZoro: {
            produk: 'Baju Zoro',
            harga: 500000,
            jumlah: 2
        },
        sweaterUniklooh: {
            produk: 'Sweater Uniklooh',
            harga: 175000,
            jumlah: 1
        }
    }
    var result = [];

    for (var a in data) {
        var hasil = {};
        var nama = [];
        jumlah = 0;
        for(var i = 0; i < shoppers.length; i++){
            if(data[a].produk == shoppers[i].product){
                if(data[a].jumlah - shoppers[i].amount >= 0){
                    data[a].jumlah -= shoppers[i].amount;
                    hasil.product = data[a].produk;
                    nama.push(shoppers[i].name);
                    hasil.nama = nama;
                    jumlah += shoppers[i].amount;
                    hasil.leftOver = data[a].jumlah;
                    hasil.totalProvit = jumlah * data[a].harga;
                }
                else{
                    var isDuplicate = false;
                    for(var b in hasil){
                        if(hasil[b].product == data[a].produk){
                            isDuplicate = true;
                        }
                    }
                    if(isDuplicate == false){
                        hasil.product = data[a].produk;
                        hasil.nama = nama;
                        hasil.leftOver = data[a].jumlah;
                        hasil.totalProvit = 0;
                    }
                }
            }
            else if(i == shoppers.length - 1 && nama.length == 0){
                hasil.product = data[a].produk;
                hasil.nama = nama;
                hasil.leftOver = data[a].jumlah;
                hasil.totalProvit = 0;
            }
        }
        result.push(hasil)
    }
    return result
}
    
  
  // TEST CASES
  console.log(countProfit([
      {name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
      {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
      {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([
      {name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
      {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
      {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
      {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
      {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]