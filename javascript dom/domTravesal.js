
// const hilang=document.querySelector('.close');
// const parent =document.querySelector('.parent');

// ini adalah contoh menghapus element tidak menggunakan dom travesal 

// hilang.addEventListener('click',function(){
//     parent.style.display='none';
// })

// dom travesal hanya bisa di gunakan untuk mengseleksi banyak node atau element 

//  1. contoh menggunakan dom travesal

// ini mengseleksi seluruh element dengan class close dan parent
const  hilang = document.querySelectorAll('.close')
const parent= document.querySelectorAll('.parent')

// kita looping terlebih dahulu karena variabel nya banyak nilai nya

// ini adalah cara pertama mengseleksi dom element yang banyak
for(let i =0;i<hilang.length;i++){
    // kita buat variabel hilang dengan index di click 
    hilang[i].addEventListener('click',function(e){
        // saat di click ini adalah perintah yang di jalan kan 
        // kita mengseleksi variabel parent dengan indeks lalu menghilang kan nya

        // bisa menggunakan ini
         parent[i].style.display='none';

         // atau ini
         e.target.parentElement.style.display='none'
    })
}

// ini adalah cara kedua mengseleksi dom element yang banyak menggunakan forEach
// e adalah parameter
// hilang.forEach(function(e){
//     // parameter sebagai pengganti dari indeks looping
//     e.addEventListener('click',function(){
//         // parentElement adalah ibu dari e indeks atau variabel hilang

            // bisa menggunakan ini
//         e.parentElement.style.display='none';

             // atau menggunakan ini
            //  e.target.parentElement.style.display='none';
//     })
// })




