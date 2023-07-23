// let nama=prompt('masukkan nama anda!');
let mahasiswa=['ucup','rizky','sinta','selsa'];
// console.log(mahasiswa)

// let hasil=mahasiswa.map(function(nama){
//   return nama.length;
// })
// console.log(hasil)

// menggunakan arrow function
// let hasil =mahasiswa.map(nama=>nama.length);
// console.log(hasil)


// menggubah array ke object mengunakaan arrow function
// map adalah methode pada js yang di gunakan untuk mencari setiap nilai di dalam array maupun object
// nama didalam map adalah argument yang mengidentifikasi setiap nilai di dalam array 
let hasil=mahasiswa.map(nama=>({nama:nama, jumlahHuruf:nama.length}));
console.log(hasil)
console.table(hasil)