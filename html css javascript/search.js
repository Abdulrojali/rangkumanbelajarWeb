const search=document.getElementById('search')
const buttonSearch=document.getElementById('cari')
const pHasil=document.querySelector('.tampil-pilihan')

let arr=[]
buttonSearch.addEventListener('click',function(){
   let hasilSearch=search.value;
   if(hasilSearch==arr.value){
      let pSearch=document.createElement('p');
      pSearch.innerHTML=arr.value
      console.log(pSearch)
   }
   else{
      alert('wrong')
   }
})

const tambahText=document.getElementById('tambah-item')
const buttonTambah=document.querySelector('#tambah')
const buttonkurang=document.querySelector('#kurang')
const hasilButton=document.querySelector('.hasil-tambah')

buttonTambah.addEventListener('click',function(){
   let hasilTambah=tambahText.value;
   arr.push(hasilTambah)
   let pNew=document.createElement('p')
   arr.forEach(function(el){
      pNew.innerHTML=el;
   })
   hasilButton.appendChild(pNew)
})

