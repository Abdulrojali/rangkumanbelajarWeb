/*var nilai = 1;
var angka = 10;

while(nilai<=angka){
    console.log('angka beroprasi dengan baik sebanyak\t'+nilai+'x');
    nilai++;
}*/
//while terus menerus(infinite loops)
/*while(true){
    console.log('ulang terus');
}
// while di hentikan oleh user
var ulang = true;
while(ulang){
    console.log('ulang terus menerus');
    confirm('ulang lagi?');
}
//while di hentikan oleh program yang di buat 
/*var nilai = 1;
var angka = 10;

while(nilai<=angka){
    console.log('angka di ulang terus\t'+nilai+'x');
    nilai++;
}*/

// latihan menggunakan while
/*var angkot = 1;
var jmlhAngkot=15;

while(angkot<=jmlhAngkot){
    console.log('angkot beroprasi dengan baik\t'+angka+'x');
    angkot++;
}*/
 
// pengulangan menggunakan for
/*for (let i=1; i<=10; i++){
    console.log(angka+'benar kontol');
}

// perulangan menggunakan do while
let angka = 1;
let nilai = 10;

do(angka<=nilai){
    console.log(angka+'kontol sia badag');
}
while(angka>=nilai)
{
    console.log('jangan tampilkan');
}*/

// do while

/*let nilai = prompt('masukkan angka');
let hasil = prompt ('masukkan kata hello world');

if(nilai>=10){
    if(hasil==="hello world"){
        alert('selamat datang kembali tuan!');
    }
}
else{
    alert('jawaban yang anda masukkan salah');
}*/

let variabel = prompt('masukkan nilai ,jangan lebih dari tiga angka')
let nilaiMaksimal = 50;

if(variabel>=nilaiMaksimal){
   alert(variabel+'\t anda lulus');
}
else if(variabel<=nilaiMaksimal){
    alert(variabel+'\t anda tidak lulus');
}
else if(variabel<=100){
   alert(variabel+'\tnilai anda kelebihan');
}
else{
    alert('yang anda masukkan bukan angka');
}