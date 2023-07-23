const items=document.querySelectorAll('.items');
const imgkosong=document.querySelector('.imgkosong');
items.forEach(function(el){
    el.addEventListener('click',()=>{
        if(el.classList.contains('1')){
        let elementNew=document.createElement('img');
        elementNew.setAttribute('src','https://media.istockphoto.com/id/1428421343/id/foto/pemandangan-matahari-terbenam-lanskap-di-pantai-barat-irlandia-dengan-cahaya-terakhir-bersinar.jpg?b=1&s=170667a&w=0&k=20&c=8tjb2p35fAcEbbyvRrzYQsLfAHMtPJqmODQ4wBx0LCc=')
        
        imgkosong.appendChild(elementNew)  
    }
    else if(el.classList.contains('2')){
        let elementNew=document.createElement('img');
        elementNew.setAttribute('src','https://media.istockphoto.com/id/1395845992/id/foto/lanskap-musim-panas-dengan-danau-kecil-di-hutan.jpg?b=1&s=170667a&w=0&k=20&c=CQ2hudYO7iYEk1AniKGAUHYsrdjOVIbgyCnZHo8HDM8=')
        
        imgkosong.appendChild(elementNew)  
    }
    else if(el.classList.contains('3')){
        let elementNew=document.createElement('img');
        elementNew.setAttribute('src','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')
        
        imgkosong.appendChild(elementNew)  
    }
    else if(el.classList.contains('4')){
        let elementNew=document.createElement('img');
        elementNew.setAttribute('src','https://media.istockphoto.com/id/1396321260/id/foto/siluet-hitam-pohon-dan-salju-putih-pemandangan-jalan-melalui-hutan-tua.jpg?b=1&s=170667a&w=0&k=20&c=0ZwIimwrHP25F6bNjl8bii-I0teYYG2se4g9l6GcRoY=')
        
        imgkosong.appendChild(elementNew)  
    }
    else{
        alert('img wrong !')
    }
    })
})

const navbar=document.querySelector('.navbar');
const navbarH3=document.querySelector('div .navbar h3');
const navbarH3Span=document.querySelector('div .navbar h3 span');

navbarH3.addEventListener('click',function(){
   navbarH3Span.style.fontFamily='sans-serif'
   navbarH3Span.style.fontSize='2.5em'
})

const p1=document.querySelector('.satu');
p1.addEventListener('click',function(){
    alert("kontol")
})