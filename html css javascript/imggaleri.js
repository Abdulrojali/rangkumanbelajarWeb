const big=document.querySelector('.img-big');
const small=document.querySelectorAll('div .img-small img');
const imgview=document.querySelector('.img-view')
const x=document.querySelector('div .img-big span')

function click(){
small.forEach(function(el){
    el.addEventListener('click',function(){
        let gambar=el.className
        imgview.setAttribute('src','New folder/img/'+gambar+'.png');
    })
})
}

click()
x.addEventListener('click',()=>{
    imgview.removeAttribute('src','')
    imgview.removeAttribute('alt','')
})