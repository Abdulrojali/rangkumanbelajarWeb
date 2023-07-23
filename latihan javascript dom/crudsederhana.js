const parentTambah=document.querySelector('.tambah');
const inputTambah=document.getElementById('tambahan');
const pushTambah=document.querySelector('.pushTambah');
let tambah=''
function menambah(){
    tambah=tambah+inputTambah.value
    console.log(tambah)
    pushTambah.appendChild(tambah)
}

const parentHapus=document.querySelector('.hapus');
const inputHapus=document.getElementById('hapusan');
let hapus=''
function menghapus(){
   if(inputHapus.value==tambah){
    hapus=pushTambah.removeChild(inputHapus.value)
   }
   else{
    alert('wrong error')
   }
}


const inputReplace=document.getElementById('replecean');
const menuPilihan=document.getElementById('menuPilihan')
let replace=''
function mereplace(){
    if(pushTambah==inputReplace.value){
        replace=pushTambah.replaceChild(menuPilihan,inputReplace)
    }
    else{
        alert('wrong!')
    }
}


const arsip=document.querySelector('.arsip');
