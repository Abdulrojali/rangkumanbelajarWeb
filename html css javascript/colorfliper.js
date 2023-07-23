const colors=['red','green','blue','yellow','orange'];
// for(let i =0; i<colors.length;i++){
//     console.log(colors[i])
// }
const btn = document.getElementById('button-hero')
const color=document.querySelector('.color')

// button click untuk merubah warna body
btn.addEventListener('click',function(){
    // variabel dari function random
    const randomNumber=getRandomNumber();
    
    // memanggil body lalu mengatur warna dengan random
    // color[randomNumber] artinya array yang ada didalam colors di ubah indexnya kedalam variabel function
    document.body.style.backgroundColor=colors[randomNumber];
    // menampilkan teks random warna
   color.textContent=colors[randomNumber]
})

// untuk merubah warna random 
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}