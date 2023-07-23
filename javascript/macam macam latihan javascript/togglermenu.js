const toggler = document.getElementsByClassName("togglermenu")[0]
const navlinks = document.getElementsByClassName("navlinks")[0]

toggler.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
})