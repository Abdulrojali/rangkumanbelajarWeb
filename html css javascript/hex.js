// array hex
const hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g'];
// memanggil btn dan teks color
const btn = document.getElementById('button-hero')
const color = document.querySelector('.color')
// buat button event untuk mengubah warna body
//btn.addEventListener('click',function(){
//     // membuat variabel # untuk hex awal
//     let hexTag='#';
//     // lalu di looping sesuai dengan jumlah hex di css
//     for (let i=0; i<6;i++){
//         //variabel hex di tambah dengan hex array yang di isi indeks
//         // ini hanya bisa di lakukan di dalam looping yang di buat
//         // karena akan di tambah var hexTag dengan hex array yang indeks nya di looping sebanyak 6kali
//         hexTag+=hex[0];
//     }
//     // ini untuk menampilkan teks dari variabel color ke dalam teks 
//     color.textContent = hexTag;
//     // merubah warna body 
//     document.body.style.backgroundColor=hexTag;
// })


// atau
btn.addEventListener('click',function(){
    // membuat variabel # untuk hex awal
    let hexTag='#';
    // membuat looping sesuai dengan nilai hex yang ada di css
    for(let i =0;i<6;i++){
        // menambah hex array dengan indeks nya function number acak
        hexTag+=hex[tambahNumberAcak()];
    }
    // ini untuk menampilkan teks dari variabel color ke dalam teks 
    color.textContent = hexTag;
    // merubah warna body 
    document.body.style.backgroundColor=hexTag;
})

function tambahNumberAcak(){
 return Math.floor(Math.random()*hex.length);
}