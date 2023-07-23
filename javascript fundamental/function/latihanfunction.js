/*let clickMe = () => {
    document.write('<h2> Selamat Datang Di Website kami, Silahkan Mencoba Dan Menikmati! </h2>');
}

function perkalian(a,b){
  let hasil = a*b;
  return hasil;
}
document.write(perkalian(10,10));

function bagi(a,b){
    let hasil = a/b;
    return hasil;
  }
  document.write(bagi(10,10));

  function perdecent(a,b){
    let hasil = a%b;
    return hasil;
  }
  document.write(perdecent(11,10));

  function perkurang(a,b){
    let hasil = a-b;
    return hasil;
  }
  document.write(perkurang(11,10));

  function tambah(a,b){
    let hasil = a+b;
    return hasil;
  }
  document.write(tambah(10,10));*/


let dataBarang = [
"Buku Tulis",
"Pensil",
"Spidol"
];
let listBarang = document.getElementById("list_barang");
function showBarang(){
 
  // clear barang

  // cetak barang
  for( let i = 0; i<dataBarang.length; i++){
    let btnEdit = "<a href = '#' onclick = 'editBarang("+i+")'>edit barang </a>";
    let btnHapus = "<a href = '#' onclick = 'hapusBarang("+i+")'>hapus barang </a>";
    
 listBarang+= "<li>"+dataBarang[i]+ "["+btnEdit +" | "+btnHapus +"]</li>";
  }
}
document.write(listBarang);


function addBarang(){
  let input = document.querySelector("input[name=barang]");
  dataBarang.push(input.value);
  showBarang();
}

function editBarang(id){
  let barangBaru = prompt("nama barang",dataBarang[id]);
  dataBarang[id] = barangBaru;
  showBarang();
}
function hapusBarang(id){
 dataBarang.splice(id,1);
  showBarang();
}
showBarang();

