// asyncrount adalah mengerjakan sebuah taks lain apabila taks sebelumnya belum selesai

// asyncount single thread
// mengerjakan taks satu persatu

// asyncrount multi thread
// mengerjakan taks seluruhnya secara bersamaan


// v8enggine adalah sebuah mesin yang terdapat di web browser khusus untuk javascript
// didalam v8enggine terdapat beberapa bagian diantaranya ;

// 1. heap   (untuk allocation memory)  contoh var let const array object

// 2. stack  (untuk pemanggilan function dan execution script) contoh console.log alert function dll



// contoh penggunakan asyncrount

console.log('satu')
setTimeout(()=>{
    console.log('dua')
},5000)
console.log('tiga')

// di atas adalah contoh penggunaan asynccrount menggunakan setTimeout
// setTimeout di sini untuk mengatur waktu jeda untuk menampilkan console.log('dua') sehingga yang tampil duluan adalah console.log('tiga')

