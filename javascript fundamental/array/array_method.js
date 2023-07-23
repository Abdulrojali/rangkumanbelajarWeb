// macam macam array methode
// join(), push(),pop(),shift(),unshift()

// 1. join() mengubah koma pada array menjadi nilai atau simbol lain
const nilai = [1,"hello",true,"string"];
console.log(nilai.join("++"))

// 2. push() memasukan array terakhir
nilai.push("sirop")
console.log(nilai)

// 3. pop() array terakhir hilang
nilai.pop()
console.log(nilai)

// 4. shift() menghilangkan array di awal
nilai.shift()
console.log(nilai)

// 5. unshift() menambahkan array diawal
nilai.unshift("turu")
console.log(nilai)

// 6. splice() menghapus dan menambah array
// splice(indexawal(ditambah ke array berapa?),menghapusnoberapa,arraybaru1,arraybaru2)
// contoh
nilai.splice(1,0,"tai","kotok")
console.log(nilai)
//atau 
// note ini menghapus 2 array mulai di belakang array 3 lalu di ganti dengan string baru
nilai.splice(3,2,"ayam","bakar")
console.log(nilai)

// 7. slice (awal,akhir)menghapus array sesuai dengan nilai yang di berikan 
// note nilai awal di slice yang di berikan akan menghapus array di depan nya sedangkan nilai akhirnya akan menghapus array di belakang nya
var angka=[1,2,3,4,5,6,7,8,9,10]
console.log(angka)
var angkaBaru=angka.slice(2,5)
console.log(angkaBaru)
// contoh 2
var huruf=["a","b","c","d","e","h"]
console.log(huruf)
var hurufBaru =huruf.slice(1,3)
console.log(hurufBaru)


// 8 foreach adalah methode untuk melooping data array
//var buah =["apel","mangga","melon","delima","orange"]
//var nomer =[1,2,3,4,5]
// array sebelum di looping
//console.log(buah)

 //arry setelah di looping
//nomer.forEach(function(e){
  //  console.log(e)
//})

// atau 
//buah.forEach(function(e,i){
//    console.log("no"+"\t"+(i+1)+"\t"+"adalah buah"+"\t"+e)
//})


// 9. map mengembalikan nilai array
//var angka1=[1,3,4,5,6,8,9,0]
//var angka2=angka1.map(function(e){
//    return e*2;
//})
//console.log(angka2.join("-"))

// 10 sort untuk mengurutkan array
var angka1=[0,7,8,1,4,2,6,4,9]
//array sebelum di urutkan
console.log(angka1)
//array setelah di urutkan
angka1.sort()
console.log(angka1)

// jika angka nya bukan satuan maka akan di urutkan berdasarkan nomor pertama angka tersebut
var angka2=[1,6,1,8,17,10,20,5,6,22,6]
angka2.sort()
console.log(angka2)
// cara mengatasi nya kita buat sebuah function seperti ini
angka2.sort(function(a,b){
    return a-b
})
console.log(angka2)

// 11 fillter mencari banyak array
var angka2=[1,6,1,8,17,10,20,5,6,22,6]
var angka3=angka2.filter(function(x){
    return x>6
})
console.log(angka3.join("-"))

// 12 find hanya bisa mencari 1 array saja
var angka2=[1,6,1,8,17,10,20,5,6,22,6]
var angka4= angka2.find(function(y){
    return y>6
})
console.log(angka4)

