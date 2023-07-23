const buttonClick=document.querySelector('#click')
const buttonCancel=document.querySelector('#cancel')
const input=document.querySelectorAll('form input').value

 buttonClick.addEventListener('click',function(){
    if(input==''){
        alert('sorry input this your account to create account!')
    }
    else{
      alert('create account succsess thanks you')
      window.location.href='./menulogin/menulogin.html'
    }
})

document.querySelector('.input-createAccount').addEventListener('click',function(z){
  z.preventDefault()
})

buttonCancel.addEventListener('click',function(){
  
})

