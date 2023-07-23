const input=document.querySelector('#inputbarang')
const search=document.querySelector('.inputpencarian i')

input.addEventListener('click',function(){
    if(search.style.display==='block'){
        search.style.display='none'
    }
    else{
        search.style.display='none'
    }
})

const kiri=document.getElementById('kiri')
const kanan=document.getElementById('kanan')
const img=document.querySelectorAll('.listbrand img')


kiri.addEventListener('click',function(){
    for(let i=0; i<img.length; i++){
        img[i].style.display='block'
    }
})
kanan.addEventListener('click',function(){
    for(let j=0; j<img.length; j--){
        img[j].style.display='block'
    }
})