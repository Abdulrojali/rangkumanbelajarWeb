const content=document.querySelector('.content-pertama');
const input=document.querySelector('#inputanUser');
const submit=document.querySelector('.submit');

const p=document.querySelector('.p')
submit.addEventListener('click',function(){
    let hasil=input.value
    p.innerHTML=hasil;
})


