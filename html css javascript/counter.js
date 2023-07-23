const value = document.getElementById('value');
const btns= document.querySelectorAll("div .btncontainer button")
let count=0
btns.forEach(function(buttonList){
   buttonList.addEventListener('click',function(e){
    const target=e.currentTarget.classList;
    if(target.contains('repeat')){
        count--
    }
    else if(target.contains('push')){
        count++
    }
    else{
        count=0;
    }
    value.textContent=count;
   })
})



