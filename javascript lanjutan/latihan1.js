



// const nama=document.getElementById('nama')
// const biling=document.getElementById('nama-berapa-biling')
// const jumlahUang=document.getElementById('jumlah-uang')
// const keterangan=document.querySelector('.keterangan')
// const button=document.getElementById('click')


// button.addEventListener('click',function(){
//    let hasilNama= nama.value
//    let hasilBiling=biling.value
//    let hasilJumlahUang=jumlahUang.value
//   let namaNew=document.createElement('p');
//   let namaHasilBiling=document.createElement('p');
//   let namaJumlahUang=document.createElement('p');
//   namaNew.innerHTML=hasilNama;
//   console.log(namaNew)
//   keterangan.appendChild(namaNew)
  
// })





function hasil(nama, energy){
    this.nama=namaAnda;
    this.energy=energyAnda;
    this.jumlah=function(isi){
        this.energy+=isi;
        console.log(`isi : ${isi}, di tambah menjadikan energy sebanyak ${this.energy}`)
    }
    console.log(`nama anda : ${this.nama}, energy anda :${this.energy}`)
}
let namaAnda =prompt('masukkan nama anda :');
let energyAnda= prompt('energy');
