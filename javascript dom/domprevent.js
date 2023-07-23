const  hilang = document.querySelectorAll('.close')
const parent= document.querySelectorAll('.parent')
hilang.forEach(function(e){
    //     // parameter sebagai pengganti dari indeks looping
   e.addEventListener('click',function(){
    //         // parentElement adalah ibu dari e indeks atau variabel hilang
    
                // bisa menggunakan ini
          e.parentElement.style.display='none';
                 // atau menggunakan ini
                //  e.target.parentElement.style.display='none';
        // ini bakal tidak terlihat menghilang karena kita menggunakan <a>
        // untuk itu kita butuh preventDefault 
          e.preventDefault();
        })
    })
    // const kontol=document.querySelector('.kontol');

    // kontol.addEventListener('click',function(){
    //   kontol.preventDefault();
    // })
    
    // const button=document.querySelector('.button').addEventListener('click',function(){
    //   document.getElementsByName('form').preventDefault();
    // })