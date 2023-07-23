const btn=document.querySelectorAll('button');

btn.forEach(function(el){
    el.addEventListener('click',function(){
        console.log(el)
    })
})