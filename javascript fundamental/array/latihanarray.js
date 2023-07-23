// array kesatu
/*const warna = ['merah','kuning','hijau','orange','biru'];
let output,i;

output = "<ul>";
for(i = 0; i<warna.length; i++){
    output += "<li>"+warna[i]+"</li>";
}
output += "</ul>";
document.getElementById("demo").innerHTML = output;



// array kedua 
const namaHewan = ['babi','monyet','anjing','kucing','serigala'];
let list;

list = '<ul>';
for(let j = 0; j<namaHewan.length; j++){
    list += '<li>'+namaHewan[j]+'</li>';
}
list += '</ul>';
document.getElementById("navlinks").innerHTML = list;

// array ketiga
const nilai = [1,'dua',3,'empat',5,'enam'];
let hello;

hello += '<ul>';
for(let a=0; a<nilai.length; a++){
    hello+= '<li>'+nilai[a]+'</li>';
}
hello += '</ul>';
document.getElementById("visit").innerHTML=hello;


const profil =["nama : abdul rojali","alamat : perumahan bukti citra asri","usia : 19 tahun","pekerjaan : turu"];
let masuk;

masuk = '<ul>';
for(let h = 0; h<profil.length; h++){
    for(let u =0; u<profil.length; u++){
        masuk += '<li>'+profil[h]+'</li>';
    }
    masuk += '</ul>';
}
document.getElementById("turu").innerHTML = masuk ;*/


// CRUD
/*const masukkanBarang = prompt('masukkan barang!');
const barangMasuk = ['sepatu','kaos kaki','motor'];

function listBarang (){
    let listMasuk = '<ul>';
    for(let j = 0; j<barangMasuk.length; j++){
        listMasuk += '<li>'+barangMasuk[j]+'</li>';
    }
    listMasuk += '</ul>';
    return listMasuk;
}
document.getElementById("masuk").innerHTML = listBarang();



const tahuBulat =[' tahu bulat','tahun persegi','tahu kotak','tahu segitiga'];
let tambah =('<ol>');
for(let i =0; i<tahuBulat.length; i++){
    tambah += '<li>'+tahuBulat[i]+'</li>';
}
tambah += '</ol>';
document.getElementById("tahu").innerHTML = tambah;

// akses array
document.write(tahuBulat[0]);
document.getElementById("array").innerHTML = tahuBulat[0];

// mengganti array
tahuBulat[1]="kontol"
document.write(tahuBulat);*/


// bedanya array dan object
const person ={firstName: 'ucok', lastName:'baba',age:'18'};

document.write('<h5>object</h5>');
// cara memanggilnya menggunakan methode person yang ada di object
document.write(person.firstName+'<br/>'+person.lastName+'<br/>'+person.age+'<br/>'+'<br/>');

// sedangkan kalo array
const biodata = ['jhon','alice','20'];
document.write('<h5> array</h5>');
document.write('nama :'+biodata[0]+'<br/>'+'nama panjang :'+biodata[1]+'<br/>'+'usia :'+biodata[2]);