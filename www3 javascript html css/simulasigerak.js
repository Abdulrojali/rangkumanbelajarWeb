const button =document.querySelectorAll('button')
const img=document.querySelector('img')

button.forEach(function(el){
    el.addEventListener('click',function(){
        if(el.classList.contains('btnleft')){
            img.classList.toggle('left')
        }
        else if(el.classList.contains('btnright')){
            img.classList.toggle('right')
        }
        else if(el.classList.contains('btnbottom')){
            img.classList.toggle('bottom')
        }
        else{
            alert('sorry this button wrong!!')
        }
    })
})

