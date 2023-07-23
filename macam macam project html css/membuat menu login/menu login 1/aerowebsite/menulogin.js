// input login
const username=document.getElementById('userName').value
const password=document.getElementById('password').value

// button login and cancel
const buttonLogin=document.querySelector('.login')
const buttonCancel=document.querySelector('.cancel')


// menu 
const createAccount =document.querySelector('.createAccount')
const signIn=document.querySelector('.signIn')


// melakukan reset form 
document.querySelector('.inputlogin').addEventListener('click',function(e){
    e.preventDefault()
})
buttonLogin.preventDefault()


// create validation input login 
function validation(){
    buttonLogin.addEventListener('click',function(){
        if(username==data.username||password==data.password){
            window.location.href='https//goggle.com'
        }
        else{
            alert('sorry your input is wrong!')
        }
    })
}
validation()


const data={
    username:'Abdul',
    password:'H3v1t4m1'
}

