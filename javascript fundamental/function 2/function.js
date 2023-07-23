/*let a = parseInt(prompt("masukkan nilai pertama !"));
let b = parseInt(prompt("masukkan nilai kedua !"));

// number() untuk mengubah string menjadi integer secara lokal
// parseInt() untuk mengubah string menjadi integer secara global
// parseFloat() untuk mengubah string menjadi integer menjadi bilangan desimal secara global
// string()untuk mengubah integer menjadi string secara lokal
//boolean() untuk mengubah string atau integer menjadi type data boolean true.


function rumusPersegi(a,b){
    let volumeA=a*a*a;
    let volumeB =b*b*b;
    hasil = volumeA+volumeB;
    return hasil;
}

console.log(rumusPersegi(a,b))*/

/*let a = parseInt(prompt("masukkan nilai pertama :"));
let b = parseInt(prompt("masukkan nilai kedua :"));
const input = prompt("ketik metode : kali bagi tambah atau kurang.")

function pertambahan() {
    tambah = a + b;
    return tambah;
}
function perkurangan() {
    kurang = a - b;
    return kurang;
}
function perkalian() {
    kali = a * b;
    return kali;
}
function pembagian() {
    bagi = a / b;
    return bagi;
}
function operasi(a, b, input) {
    switch (input) {
        case "kali":
            return perkalian();
        case "bagi":
            return pembagian();
        case "tambah":
            return pertambahan();
        case "kurang":
            return perkurangan();
        default:
    }
}
document.write(operasi(a,b,input))*/


// global var

// ini adalah variabel global
/*var d =10;
console.log(d)

//lokal variabel

//ini adalah variabel lokal 
function variabel(){
    var d = 5;
    return d;
}
console.log(variabel(d))

var a = 20;
// function scope adalah sebuah nilai yang berada di dalam function yang tidak bisa di panggil apabila function nya tidak di panggil.
function scope(){
    var a= 10;
    return a;
}
console.log(a)*/

// function rekusif adalah sebuah nilai dari function yang memanggil dirinya sendiri (cara lain untuk looping)
function rekusif(n){
    rekusif(n-1)
    return rekusif();
}
