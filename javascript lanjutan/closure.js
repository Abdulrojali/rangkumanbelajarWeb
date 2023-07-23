// closure 
// closure adalah sebuah function yang memiliki function didalam nya
// lexical scope adalah scope yang dibaca saat kode JavaScript melalui proses compile, atau sering disebut compile-time. Lexical scope ini yang mengatur di scope mana kita harus mencari sebuah variable

// ini adalah contoh closure
// function init(){ // outerr function / parent function
//     let nama='ucok'; // ini adalah variabel lokal yang terdapat di dalam function
//     function tampilnama(){ // inner function / child function(closure) dapat mengakses variabel parent
//         console.log(nama);// ini contoh mengakses variabel dari parentnya apabila tidak ada variabel parent maka akan mencari global scope
//     }
//     return tampilnama()
// }
// init()


// function facktori
// function init(){
//     let nama ='ucup';
//     function tampilnama(){
//         console.log(nama);
//     }
//     return tampilnama
// }
// let hasil=init();
// hasil('ucup')





// console.log(nama())
// console.log(nama())
// function nama (){
//  let hasil=10;
//     function nilai(){
//          console.log(hasil);
//     }
//     return nilai()
// }

 

// let hasil=()=>{
//     let angka1=15;
// let hasil2=()=>{
//         let angka2=10
//         console.log(angka1+angka2)
//     }
//     return hasil2
// }
// let jumlah=hasil()
// console.log(jumlah())




 const text1=document.getElementById('text1')
 const text2=document.getElementById('text2')
 const button=document.getElementById('click')
 const text=document.querySelectorAll('div .input input')

 button.addEventListener('click',function(){
    text.forEach(function(el){
        let masukNama=el.value;
        function nama (){
            let hasil=masukNama;
            function inputNama(){
                console.log(hasil)
            }
            return inputNama()
        }
        nama()
    })
 })

 