// // membuat function pada js

// // 1. function declaration
// // huruf adalah parameter
// function nama(huruf){
//     return `halo ${huruf}`;
// }
// // ucok adalah arguments yng di kirimkan ke parameter
// console.log(nama('ucok'))

// // 2. function expression adalah function yang di berikan variabel
// let hasil=function nilai(akhir){
//     return`halo ${akhir}`;
// }
// console.log(hasil(10))


// 3. arrow function
// beberapa cara penulisan arrow function
// cara pertama
// const nilai=(nama)=>{
//     return `halo ${nama}`;
// }
// console.log(nilai('memek'))

// cara kedua 
// implisit return tidak perlu memakai kurung kurawal {} karena akan otomatis di buat kan oleh javascript
// dan juga apabila parameter nya 1 tidak perlu di beri () 
// const nilai =nama=> `halo ${nama}`;
// console.log(nilai('ucup'))


// // cara ketiga
// const hasil= (nama,alamat)=>`halo ${nama}, alamat anda ${alamat}`;
// console.log(hasil('ucup','sukabumi'))

// cara keempat
// memanggil arrow function tidak ada parameternya
let tampilNama=()=>`hallo kontol`;
console.log(tampilNama())