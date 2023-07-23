const number1=document.getElementById('satu')
const number2=document.getElementById('dua')
const buttonClick=document.getElementById('click')
const operator=document.getElementById('operator')
let hasil=document.getElementById('hasil')

buttonClick.addEventListener('click',()=>{
   return hasil.innerHTML=eval(number1.value+operator.value+number2.value)
})




