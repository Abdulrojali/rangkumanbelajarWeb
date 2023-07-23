// beberapa macam function pada javascript

/* 1. menggunakan cara biasa
   2. menggunakan cara 
   3. menggunakan tanda panah =>
   4. dan menggunakan Constructor.*/


// --a-- membuat fungsi dengan cara biasa

/*function namaFungsi() {
    console.log('hello world');
}
namaFungsi();


// --B-- cara membuat fungsi dengan ekspresi

let masukkanNilai = function () {
    console.log('masukkan nilai');
}
document.write(masukkanNilai);*/
// note Kita menggunakan variabel, lalu diisi dengan fungsi. Fungsi ini sebenarnya adalah fungsi anonim (anonymous function) atau fungsi tanpa nama.


// --C-- membuat fungsi menggunakan tanda panah 

let fungsiSatu = () => {
    document.write('kontol');
}
// atau bisa seperti di bawah ini apabila fungsi nya hanya satu baris

let fungsiDua = () => document.write('kontol');
//  note Sebenarnya hampir sama dengan yang menggunakan ekspresi. Bedanya, kita menggunakan tanda panah (=>) sebagai ganti function.


// -- D -- membuat fungsi menggunakan Kostruktor

// note Cara ini sebenarnya tidak direkomendasikan oleh Developer Mozilla, karena terlihat kurang bagus. Soalnya body fungsinya dibuat dalam bentuk string yang dapat mempengaruhi kinerja engine javascript.

let namaFungsi = new Function('console.log("Hello World!");');