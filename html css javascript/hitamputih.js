const black=document.getElementById('black')
const white=document.getElementById('white')
const liA=document.getElementsByTagName('a')
black.addEventListener('input',function(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    liA.style.color='red';
})

white.addEventListener('input',function(){
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    liA.style.color='black';
})

