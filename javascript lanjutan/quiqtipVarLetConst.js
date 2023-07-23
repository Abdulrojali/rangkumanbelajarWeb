// // perilaku var let dan const

// // var dan let dapat mengubah isi dari variabel nya sedangkan const tidak dapat merubah isi nya
// // sama hal nya dengan object dan array var dan let bisa mengubah isi dari object dan array
// var j=1;
// console.log(j)
// j=3;
// console.log(j)

// let h=10;
// console.log(h)
// h=5
// console.log(h)



// //sedangkan const dapat mengubah object tetapi tidak dapat menambah object
// const q=9;
// console.log(q)
// q=1;
// console.log(q)

// // prilaku const pada object
// const nama={
//     nama:'ucok',
//     alamat:'cicurug'
// }
// // sebelum di ubah
// console.log(nama)

// // setelah di ubah
// nama.alamat='sukabumi';
// console.log(nama)

// // menambah object ini akan error karena const tidak dapat menambah object
// nama.kelas=(10);
// console.log(nama)


// // prilaku const pada array
// const arr=[1,2,3,4];
// console.log(arr)

// // menambah array ini akan error
// arr=[1,2,3,4,5]
// console.log(arr)

// // menambah array menggunakan methode push()
// arr.push(5)
// console.log(arr)




// // block scope dan function scope
// // javascript menganut function scope artinya kita dapat mengakses variabel di luar perulangan
// // contoh

// for(let i =0; i<10; i++){
//     console.log(i)// seharusnya dia looping sampai 9
// }
// console.log(i)// tetapi karena ada console lagi diluar perulangan maka nambah 1 lagi menjadi 10
// // apabila menggunakan bahasa pemrograman lain ini akan error karena menganut block scope yang tidak bisa mengakses variabel di luar perulangan 



