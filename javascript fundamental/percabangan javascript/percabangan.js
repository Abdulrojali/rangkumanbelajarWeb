// 1 contoh percabangan if 
/*var totalBelanja = prompt('total belanja?');

if(totalBelanja>=100000){
    document.write("<h2>selamat kamu mendapatkan hadiah 1 kulkas</h2>");
}

document.write("<p>terimakasih telah berbelanja di toko kami</p>");*/

// 2 contoh percabangan if else


/*var password = prompt("Password:");

if(password == "kopi"){
    document.write("<h2>Selamat datang bos!</h2>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}

document.write("<p>Terima kasih sudah menggunakan aplikasi ini!</p>");*/

// 3 contoh percabangan if /else if / else

/*var nilai = prompt("Inputkan nilai akhir:");
var grade = "";

if (nilai >= 90){
    grade = "A"
} else if(nilai >= 80) {
    grade = "B+"
} else if(nilai >= 70) {
    grade = "B"
} else if(nilai >= 60) {
    grade = "C+"
} else if(nilai >= 50) {
    grade = "C"
} else if(nilai >= 40) {
    grade = "D"
} else if(nilai >= 30) {
     grade = "E"
} else { 
    grade = "F";
}
document.write(`<p>Grade anda: ${grade}</p>`);*/

// 4 percabangan switch/case


// contoh pertama 
/*var jawab = prompt("Kamu beruntung! Silahkan pilih hadiahmu dengan memasukan angka 1 sampai 5");
var hadiah = "";

switch(jawab){
    case "1":
        hadiah = "Tisu";
        break;
    case "2":
        hadiah = "1 Kotak Kopi";
        break;
    case "3":
        hadiah = "Sticker";
        break;
    case "4":
        hadiah = "Minyak Goreng";
        break;
    case "5":
        hadiah = "Uang Rp 50.000";
        break;
    default:
        document.write("<p>Opps! anda salah pilih</p>");
}

if(hadiah === ""){
    document.write("<p>Kamu gagal mendapat hadiah</p>");
} else {
    document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
}*/
 


//contoh ke 2
/*var nilai = prompt("input nilai");
var grade = "";

switch(true){
    case nilai < 90:
        grade = "A";
        break;
    case nilai < 80:
        grade = "B+";
        break;
    case nilai < 70:
        grade = "B";
        break;
    case nilai < 60:
        grade = "C+";
        break;
    case nilai < 50:
        grade = "C";
        break;
    case nilai < 40:
        grade = "D";
        break;
    case nilai < 30:
        grade = "E";
        break;
    default:
        grade = "F";
}*/

// 5 operator ternary
  //contoh operator ternary
 /* var jwb = prompt("Apakah Jakarta ibu kota indonesia?");

  var jawaban = (jwb.toUpperCase() == "IYA") ? "Benar": "Salah";

  document.write(`Jawaban anda: <b>${jawaban}</b>`);*/


  // 6 nested / percabangan 

  /*var username = prompt("Username:");
  var password = prompt("Password:");

  if(username == "petanikode"){
      if(password == "kopi"){
          document.write("<h2>Selamat datang pak bos!</h2>");
      } else {
          document.write("<p>Password salah, coba lagi!</p>");
      }
  } else {
      document.write("<p>Anda tidak terdaftar!</p>");
  }*/

  // contoh singkat 

  /*var username = prompt("Username:");
var password = prompt("Password:");

if(username == "petanikode" && password == "kopi"){
    document.write("<h2>Selamat datang pak bos!</h2>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}*/
 
 
 
 
 
 
 
  // latihan percabangan 
  
 //latihan if else if
/*var nilai = prompt('masukkan 2 angka!');

if(nilai >=10 && nilai <=99){
    document.write(nilai+'<h3>anda memasukan angka yang benar</h3>');
}
else if (nilai >= 100 && nilai <= 999){
    document.write(nilai+'<h3>yang anda masukkan lebih dari dua angka </h3>')
}
else if (nilai >= 1000 && nilai <= 9999999999999999999999999999999999){
    document.write(nilai+'<h3>yang anda masukkan terlalu banyak angka </h3>')
}
else if(nilai <= 10){
    document.write(nilai+'<h3>yang anda masukkan hanya satu angka</h3>');
}
else{
    document.write(nilai+'<h3>yang anda masukkan bukan angka</h3>');
}
document.write('<h2>selamat datang di website kami!</h2>');*/