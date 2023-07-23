/*let masukkanNilai = prompt('masukkan nilai ujian');
let kkm = 50;

if(masukkanNilai>=kkm){
    alert('anda tidak remedial');
}
else if(masukkanNilai<=kkm){
    alert('anda remedial')
}
else{
    alert('yang anda masukkan bukan angka');
}
document.write('<h4> bagi siswa yang tidak remedial di persilahkan untuk mengikuti permbelajaran seperti biasa</h4>');
document.write('<h5> bagi siswa yang remedial anda akan melakukan remedial sepulang sekolah, di aula sekolah.');
*/



// masih belum di mengerti selesaikan nanti soal di bawah ini
/*let bilangan=prompt ('masukkan bilangan');
let angka = 3;
if(bilangan % 3==4){
    document.write('nilai nya adalah'+bilangan);
}*/





/*let nilai = 3;
let masukkanBilangan = prompt('masukan  bilangan nya ');

if (masukkanBilangan % 2 == 1){
    document.write('<p> bilangan anda adalah bilangan ganjil\b'+masukkanBilangan);
}
else{
    document.write('<p> bilangan anda adalah bilangan genap\b'+masukkanBilangan);
}*/
// latihan if else
// latihan pertama
/*let masukkanNama = prompt('masukkan nama');
let jenisKelamin = prompt('masukkan jenis kelamin');

if (jenisKelamin ==='laki laki'){
   document.write('<p> selamat datang bro<p>');
}
else if(jenisKelamin === 'perempuan'){
    document.write('<p> selamat datang sis</p>');
}
else{
    document.write('<p> yang anda masukan bukan pilihan</p>');
}
document.write('<h3> selamat datang di sini meki atau kontol!');*/

// latihan dua

/*let bilangan = prompt('masukkan bilangan!');

if (bilangan % 2 == 0){
    document.write(bilangan+'<h4> bilangan yang anda masukkan adalah bilangan genap!');
}
else if (bilangan % 2 == 1){   
    document.write(bilangan+'<h4> bilangan yang anda masukkan adalah bilangan ganjil!');
} 
else {
     document.write(bilangan+'<h4>yang anda masukkan bukan bilangan!');
}*/

// latihan tiga if else/if else
/*let namaAnda = prompt('masukkan nama anda!');
let masukkanTanggalLahir = prompt('masukkan tanggal lahir anda')


if (masukkanTanggalLahir >= 1944&&masukkanTanggalLahir<=1964){
    document.write('<h5> anda adalah gen boomer');
}
else if (masukkanTanggalLahir>= 1965&&masukkanTanggalLahir<=1979){
    document.write('<h5> anda adalah gen x');
}
else if(masukkanTanggalLahir>= 1980&&masukkanTanggalLahir<=1994){
    document.write('<h5> anda adalah gen y');
}
else if(masukkanTanggalLahir>=  1995&&masukkanTanggalLahir<= 2015){
    document.write('<h5> anda adalah gen z');
}
else{
    document.write('<h5> anda adalah gentong');
}*/

//latihan 3 

/*let beratBadan = prompt('masukkan berat badan anda');
let tinggiBadan = prompt('masukkan tinggi badan anda');
let hasil = tinggiBadan / beratBadan;
if (hasil<=1.8){
    document.write('<h3> berat badan anda terlalu kurus</h3>');
}
else if(hasil>=1.8 && hasil <=2.5){
    document.write('<h3> berat badan anda langsing</h3>');
}
else if(hasil>=2.5){
    document.write('<h3> berat badan anda gemuk</h3>');
}
document.write('<h3> berat badan anda :</h3>'+beratBadan);
document.write('<h3>tinggi badan anda :</h3>'+tinggiBadan);
document.write('<h3> kriteria badan anda :</h3>'+hasil);*/

//latihan 4

/*let pertanyaan=confirm('kamu suka bubur?');

if (pertanyaan == true){
    gatau=prompt('kamu suka bubur di aduk atau tidak di aduk? tulis jawaban mu');
}
else if(pertanyaan==false){
    cobaLagi = confirm('beneran kamu ga mau jawab lagi mumpung masih bilang di ulangi');
   if (cobaLagi==true){
        alert('selamat kamu memang orang nya suka di paksa');
    }
}
else{
    alert('kamu bukan pecinta bubur');
}*/

//latihan  if elseif else

/*let masukkanNama = prompt('masukkan nama anda');
let masukkanUsia = prompt('masukkan usia anda');

if(masukkanUsia>=1 && masukkanUsia<=1){
    document.write('<h3> kamu termasuk usia bayi</h3>');
}
else if (masukkanUsia>=1&&masukkanUsia<=3){
    document.write('<h3> kamu termasuk usia balita</h3>');
}
else if (masukkanUsia>=3&&masukkanUsia<=5){
    document.write('<h3> kamu termasuk usia balita</h3>');
}
else if (masukkanUsia>=5&&masukkanUsia<=12){
    document.write('<h3> kamu termasuk usia anak anak</h3>');
}
else if (masukkanUsia>=12&masukkanUsia<=17){
    document.write('<h3> kamu termasuk usia remaja</h3>');
}
else if (masukkanUsia>=17&&masukkanUsia<=25){
    document.write('<h3> kamu termasuk usia pemuda</h3>');
}
else if (masukkanUsia>=25&&masukkanUsia<=40){
    document.write('<h3> kamu termasuk usia dewasa</h3>');
}
else{
    document.write('<h3> kamu termasuk usia lansia</h3>');
}
document.write('<h3>selamat datang !</h3>');
document.write('<h3>nama anda</h3> :'+masukkanNama);
document.write('<h3>usia anda saat ini</h3> :'+masukkanUsia);*/
// latihan if elseif else
/*let nilai = prompt('masukkan nilai');
let kkm = 71;

if(nilai>=kkm){
    document.write('<h2>anda lulus</h2>');
}
else if(nilai==71){
    document.write('<h2>anda lulus</h2>');
}
else{  
    document.write('<h2>anda remedial</h2>');
}*/
// latihan menggunakan switch/case

/*let nilai = prompt('masukkan nilai');
let kkm = 71;

switch(nilai){
    case '10':
        document.write('<h3>anda remedial</h3>');
        break;
    case '20':
        document.write('<h3>anda remedial</h3>');
        break;
    case '30':
        document.write('<h3>anda remedial</h3>');
        break;
    case' 40':
        document.write('<h3>anda remedial</h3>');
        break;
    case '50':
        document.write('<h3>anda remedial</h3>');
        break;
    case '60':
        document.write('<h3>anda remedial</h3>');
        break;
    case '70':
        document.write('<h3>anda remedial</h3>');
        break;
    case '80':
        document.write('<h3>anda lulus</h3>');
        break;
    case '85':
        document.write('<h3>anda lulus</h3>');
        break;
    case '90':
        document.write('<h3>anda lulus</h3>');
        break;
    case' 95':
        document.write('<h3>anda lulus</h3>');
        break;
    case '100':
        document.write('<h3>anda lulus</h3>');
        break;
        default:

}*/

