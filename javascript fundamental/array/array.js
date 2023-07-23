/*const susu =['susu ultramilk','susu Indomilk','susu Frisenflag','susu ibu'];
document.getElementById('turu').innerHTML = susu;*/


// javascript array
//list barang ke satu
let alat = ['kursi', 'meja', 'jam', 'sepatu'];

document.write('<h3>List alat</h3>');
document.write('<ol>');

for (let i = 0; i < alat.length; i++) {
    document.write('<li>' + alat[i] + '</li>');
}
document.write('</ol>');

// list barang kedua
document.write('<h3>List alat menggunakan foreach</h3>');
document.write('<ol>');

alat.forEach((data) => {
    document.write('<li>' + (data) + '</li>');
});
document.write('</ol>');

// cara menambah data array 
document.write('<h3>Cara Menambah Data Array</h3>')
const nilai = [1, 2, 3, 4, 5];
document.write('<ul>');
for (let i = 0; i < nilai.length; i++) {
    document.write('<li>' + nilai[i] + '</li>');
}
document.write('</ul>');

nilai[5] = 6;
document.write(nilai);

// cara menambah data array menggunakan methode push()
document.write('<h3> cara menambah data pada array menggunakan methode push()</h3>');
const alatOlahraga = ['matras', 'training', 'sepatu', 'kaos', 'tali', 'barbel'];
for (let i = 0; i < alatOlahraga.length; i++) {
    document.write('<ol>');
    document.write('<li>' + alatOlahraga[i] + '</li>');
    document.write('</ol>');
}
alatOlahraga.push('boxer', 'kayu', 'televisi', 'langit');
document.write(alatOlahraga);

// cara menghapus array
document.write('<h3> cara menghapus array menggunakan delete </h3>');
const bahasaProgram = ['javascript', 'golang', 'reactJS', 'nodeJS', 'java'];
// menggunakan delete
delete bahasaProgram[3];
document.write(bahasaProgram);


// cara menghapus array menggunakan methode pop()
document.write('<h3> menghapus array menggunakan methode pop() menghapus data dari belakang</h3>');
const listrik = [112, 334, 55, 6564, 75744];
listrik.pop();
document.write(listrik);

//menghapus data dari depan menggunakan shift()
document.write('<h3> menghapus data dari depan menggunakan shift()</h3>');
const bunga = ['mawar', 'melati', 'anggrek', 'kamboja'];
bunga.shift();
document.write(bunga);

// menghapus data pada indeks tertentu menggunakan splice
document.write('<h3> menghapus data pada indeks tententu menggunakan splice</h3>');
document.write('<p> pada splice sendiri terdapat dua parameter yang harus di berikan</p>');
document.write('<ul>');
document.write('<li> < indeks >adalah data yang akan di hapus dari array dan </li>');
document.write('<li> < total >jumlah data yang akan di hapus </li>');
document.write('</ul>');
document.write('<h4> contoh nya </h4>');

const warna = ['merah', 'kuning', 'hijau', 'ungu', 'biru', 'orange'];
document.write(warna);
document.write('<br/><br/><br/><br/>')
warna.splice(1, 1);
document.write(warna);
document.write('<p> warna kuning hilang karena untuk indeks nya mengambil angka 1 dan menghilangkan 1 array saja');
document.write('<br/><br/><br/>');


// mengubah isi array
document.write('<h3> mengubah isi array </h3>');
const bahasa = ['kotlin','java','C','C++','html'];
document.write(bahasa);
document.write('<h4> array awal</h4>');
document.write('<br/><br/><br/>')
bahasa [1]='javascript';
document.write(bahasa);
document.write('<h4> array setelah di rubah </h4>');

// menyaring data array
document.write('<h4> untuk menyaring data array kita menggunakan methode fillter()</h4>');
const nilaiAngka = [1,2,3,4,5,6,7,8,9,10];

/*const fillterArray = nilaiAngka.filter((item)=>{return item % 2 === 0});
document.write(fillterArray);*/
// atau
const fillterArray = nilaiAngka.filter(item => item % 2 === 0);
document.write(fillterArray);

// cara mengecek array menggunakan methode includes()
document.write('<h4> cara menggecek array menggunakan methode includes</h4>');
let sayuran = ['bayam','jagung','wortel','seledri'];
document.write('<p>'+sayuran+'</p>');
let cekJagung = sayuran.includes('jagung');
document.write('<h3> setelah di berikan methode includes mengecek jagung ada di dalam array atau tidak maka apabila ada dia akan bernilai true sedangkan jika tidak ada maka akan bernilai false');
document.write('<p> cek jagung ada atau tidak ='+cekJagung+'</p>');


// cara mengurutkan array
document.write('</h3>mengurutkan array menggunakan methode sort()</h3>');
const alfabet =['a','i','d','e','f','g'];
let number =[6,8,9,2,5,1,4,6];
document.write('<br/><br/><br/>')
document.write(alfabet);
document.write('<br/><br/>')
document.write(number);
document.write('<br/><br/><br/><br/>')
document.write(alfabet.sort());
document.write('<br/>');
document.write(number.sort());
// contoh penggunaa array pada javascript
/*const cars = ['lamborgini','ferrari','pajero','suzuki','tesla','xenia','bus'];
let pilihAngka = prompt('masukkan angka 1 angka saja , pilih di antara 1-6');

if(pilihAngka == cars[0]){
    document.getElementById('turu').innerHTML = cars[0];
}
else if (pilihAngka == cars[1]){
    document.getElementById('turu').innerHTML = cars[1];
}
else if (pilihAngka == cars[2]){
    document.getElementById('turu').innerHTML = cars[2];
}
else if (pilihAngka == cars[3]){
    document.getElementById('turu').innerHTML = cars[3];
}
else if (pilihAngka == cars[4]){
    document.getElementById('turu').innerHTML = cars[4];
}
else if (pilihAngka == cars[5]){
    document.getElementById('turu').innerHTML = cars[5];
}
else if (pilihAngka == cars[6]){
    document.getElementById('turu').innerHTML = cars[6];
}
else{
    document.getElementById('turu').document.write('<p> yang anda masukkan melebihi angka yang di tentukan</p>');
}*/

/*document.write('<h4> metode pop()</h4>'+'<br/>'+'<p> ini dapat di gunakan untuk menghapus array terakhir atau mengembalikan nya dengan cara sebagai berikut:</p>');
// cara menghapus menggunakan methode pop() last array
const tai =['tai kotok','tai ayam','tai sapi','tai kambing','tai kucing'];
/*document.getElementById("demo1").innerHTML = tai;
tai.pop();
document.getElementById("demo2").innerHTML = tai;*/

// cara mengembalikan nilai last array yang terhapus menggunakan methode pop()
/*document.write('<h4> cara mengembalikan nilai last array yang terhapus menggunakan methode pop()</h4>');
// mengembalikan array akhir dengan menghapus seluruh nya
document.getElementById("demo1").innerHTML = tai.pop();
//nilai array muncul selain array terakhir
document.getElementById("demo2").innerHTML = tai;*/



document.write('<h4> methode shift()</h4>'+'<br/>'+'<p> berfungsi untuk menghapus array awal:</p>');

const nama = ['adam','idris','nuh','hud','sholeh'];
document.write(nama+'<br/>');
// menghapus array menggunakan methode shift()
nama.shift();
document.write(nama);
// mengembalikan array pertama yang terhapus

document.getElementById("demo1").innerHTML = nama.shift();
document.getElementById("demo2").innerHTML = nama;

