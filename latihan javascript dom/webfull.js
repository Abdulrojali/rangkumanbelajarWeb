const toggler=document.querySelector('.navtoggler')
const navlinks = document.querySelector('.navlinks')

toggler.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
})