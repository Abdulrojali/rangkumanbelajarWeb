const navbar=document.querySelector('.navbar');
const navbarH3=document.createElement('h3');
const navbarTeksH3=document.createTextNode('School');

navbarH3.appendChild(navbarTeksH3)
navbar.appendChild(navbarH3)



const toggler= document.querySelector('div.container #navtoggler')

toggler.addEventListener('click',function(){
   document.querySelector('div.container #navlinks').classList.toggle('active') 
})