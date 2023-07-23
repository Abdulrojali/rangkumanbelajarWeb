// object adalah sebuah array yang lebih kompleks
// contoh  nya

// ini adalah object
var contoh = {
    nama:"abdul rojali",
    alamat:"perumahan bukit citra asri",
    usia:"19 tahun",
    pekerjaan:"mahasiswa",
    nomorTelepon:"081319900109",
    anakKe:[1,2,3,4,5,6,8,10]
}
console.log(contoh)

// ini memanggil object
console.log("nama anda :"+contoh.nama)
console.log("alamat anda :"+contoh.alamat)
console.log("usia anda :"+contoh.usia)
console.log("pekerjaan anda :"+contoh.pekerjaan)
console.log("nomor telepon anda :"+contoh.nomorTelepon)
console.log("anda anak ke- :"+contoh.anakKe[1])

/* 4 cara membuat object
- object literal
- function declaration
- constructor function (keword new)
- object.create()*/

// 1. object literal
var mhs1 ={
    nama:"ucup",
    kelas:"22SIC",
    alamat:"Sukabumi",
    usia:"19 tahun"
}
console.log(mhs1)
var mhs2 ={
    nama:"ucok",
    kelas:"22SIC",
    alamat:"cianjir",
    usia:"20 tahun"
}
console.log(mhs2)

// 2. function declaration
function biodataMahasiswa(nama,jurusan,alamat,usia){
    var mhs={};
    mhs.nama=nama;
    mhs.jurursan=jurusan;
    mhs.alamat=alamat;
    mhs.usia=usia;
    return mhs;
}
// mengisi object dari function di atas
var mhs3=biodataMahasiswa("abdulrojali","sistem informasi","perumahan bukit citra asri","19 tahun")
console.log(mhs3)

// 3. constructor 
// note mirip dengan function declaration tetapi nama function di awalin huruf capital contoh:
function Mahasiswa(nama,alamat,jurusan,usia){
    this.nama=nama;
    this.alamat=alamat;
    this.jurusan=jurusan;
    this.usia=usia;
}
// cara panggil object nya
// note harus menggunakan keword new saat memanggilnya contoh nya:
var mhs4= new Mahasiswa('budi','sukabumi','sistem informasi','19tahun')
console.log(mhs4)


// contoh lain untuk membuat dan memanggil object

// cara 1 - function declaration
function halo(){
    console.log(this)
    console.log("halo");
}
// this dalam function declaration mengembalikan object global pada function declaration 
this.halo()
halo();

// cara 2 - object literal
var obj={};
obj.halo=function(){
    // this dalam object literal mengembalikan object / parameter fungsi
    console.log(this)
    console.log('halo');
}
obj.halo();

// cara 3 - constructor
function Obj(){
    // this mengembalikan object yang baru di buat
    console.log(this)
    console.log('halo');
}
new Obj();

// konsep this adalah property window atau. this adalah window 



