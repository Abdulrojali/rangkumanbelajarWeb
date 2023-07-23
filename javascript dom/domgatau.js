const p=document.querySelectorAll('.name');
const button = document.querySelectorAll('.click')

p.forEach(function(name){
    console.log(name)
})

button.forEach(function(click){
   const target= click.addEventListener('click',function(){
       target.currentTarget.classList
       if(target[0]){
        console.log(target)
       }
    })
})
