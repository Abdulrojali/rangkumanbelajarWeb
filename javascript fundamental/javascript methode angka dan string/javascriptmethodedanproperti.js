// property pada javascript

// 1. property length  untuk menhitung konten dalam variabel atau array
var nilai ="hello world"
console.log(nilai.length)

// 2. property indexof mencari posisi letak dari nilai di angka ke berapa
var nilai ="hello world"
console.log(nilai.indexOf("w"))

// 3. substring menghapus huruf pada variabel string sesuai angka yang di berikan
var nilai = "hello world"
console.log(nilai.substring(1,5))

// 4. replace mengganti kosakata dengan parameter 1 sebagai nilai yang di ganti, parameter 2 sebagai nilai yang di tambah
var nilai = "hello kontol"
console.log(nilai.replace("kontol","world"))

// 5. toUpperCase untuk membuat string menjadi huruf besar semua
var nilai = "hello world"
console.log(nilai.toUpperCase(nilai))

// 6 . toLowwerCase untuk membuat string menjadi huruf kecil
var hasil = "HELLO WORLD"
console.log(hasil.toLowerCase(hasil))


// array methode

// 1. join untuk mengganti koma dari array
var array =["nilai",4,false]
console.log(array.join("."))

// 2. pop untuk menghapus array  sesuai kondisi

// * kondisi pertama apabila array di beri pop di luar console.log akan menghapus array bagian belakang
var array =["nilai",4,false]
array.pop()
console.log(array)

// * kondisi kedua apabila array di beri pop() di dalam console.log maka akan  menghapus semua array dan menyisakan array terakhir
var array =["nilai",4,false]
console.log(array.pop())

// 3 push menambah array di belakang sesuai dengan kondisi

// * kondisi pertama apabila array di beri push() di luar console.log akan menampilkan isi array
var array =["nilai",4,false]
array.push(Boolean)
console.log(array)

// * kondisi kedua apabila array di beri push() di dalam console maka akan menampilkan jumlah array
var array =["nilai",4,false]
console.log(array.push(Boolean))


// 4 shift() menghapus array 
// * menghapus array pertama dengan nilai di luar console
var array =["nilai",4,false]
array.shift()
console.log(array)

// * menghapus seluruh array selain array pertama
var array =["nilai",4,false]
console.log(array.shift())


// 5 unshift() menambah array pertama
var array =["nilai",4,false]
array.unshift("lemon")
console.log(array)

// 6 mengubah nilai array
array[1]="jelek"
console.log(array)

// 7 concat menggabungkan dua array
let a = ["satu"]
let b = ["dua"]
let c =a.concat(b)
console.log(c)