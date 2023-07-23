const satu=document.getElementById('satu');
const dua=document.getElementById('dua');
const button=document.querySelector('#click');
const p=document.querySelector('.hasil');

let hasil;
function satusatu(){
    let T1=satu.value
    let p1=document.createElement('p');
    p1.innerHTML=T1
    hasil=p.appendChild(p1)
    return hasil;
}
function duadua(){
    let T2=dua.value
    let p2=document.createElement('p');
    p2.innerHTML=T2
    hasil=p.appendChild(p2)
    return hasil;
}

button.addEventListener('click',function(){
   satusatu()
   duadua()
})

