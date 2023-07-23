const textTambah=document.getElementById('tambahitem')
const tambah=document.getElementById('tambah')
const kurang=document.getElementById('hapus')
const item=document.querySelector('.mainitem')

tambah.addEventListener('click',function(){
    tambahan()
})

kurang.addEventListener('click',function(){
    kurangan()
})
let hasil;
let pNew;
function tambahan(){
     hasil=textTambah.value
     pNew=document.createElement('p')
     pNew.setAttribute('class',hasil)
     let textNew=document.createTextNode(hasil)
     pNew.appendChild(textNew);
     item.appendChild(pNew);
     console.log(pNew)
}

function kurangan(){
    if(pNew.classList.contains(hasil)){
       pNew.style.display='none'
    }
    else{
        alert('wrong!')
    }
}
