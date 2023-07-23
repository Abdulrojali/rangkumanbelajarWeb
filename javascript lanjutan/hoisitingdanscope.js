// // Execution Context, Hoisting & Scope

// // A. execution context adalah pengerjaan javascript pada code di mulai dari awal 
// // misalkan 
   
// // creption phase terjadi pada context global
// // apabila bertemu function creption phase nya bukan context global lagi bisa jadi context lokal
// console.log(a)
// var a ='zz';
// // hasilnya undifined
// // karena javascript akan mengecek variabel a bernilai  undifined terlebih dahulu
// // maka console.log(a) nya bernilai undifined karena berada di bawah variabel a nya dan di atas phase creption

// console.log(a)
// // apabila kita meletakan di bawah variabel a maka console nya bernilai zz; karena console.log nya berada setelah phase creption awal 

// console.log(hello())
// // apabila menggunakan hello() maka mengeksekusi program di dalam nya 
// function hello(){

// }
// console.log(hello)

// // B. hoisting
// // menaikan context

// console.log(b)
// var b=10;
// // artinya var b akan di naikan ke atas untuk di representasi menjadi var b dengan nilai undifined
// // lalu console akan bernilai undifined
// // setelahnya var b bernilai 10 apabila di console maka hasil akan muncul 10
// // ini di sebut konsep hoisting


// // let nama='ucup';
// // let ins='@ucup.gmail.com';

// // function linkInstagram(ins){
// //   let  url='http://instagram.com/'
// //     return url+ins;
// // }
// // console.log(`your link instgram : ${linkInstagram(ins)}`)


// // C. scope
// // scope adalah mecari variabel terdekat pada function di mulai dari variabel lokal lalu variabel global
// // contoh

// // ini adalah variabel global
// // let nama='ucup';
// // let ins='@ucup.gmail.com';

// // // ins didalam function linksInstagram adalah parameter
// // function linkInstagram(ins){
// //   let  url='http://instagram.com/'
// //     return url+ins;
// // }
// // // didalam console terdapat function linksIntagram(ins) dengan arguments ins ins disini mencangkup varibel global karena tidak terdapat variabel lokal
// // console.log(`your link instgram : ${linkInstagram(ins)}`)
// // // didalam console di ganti isi argument dengan string ucup 
// // console.log(`your link instgram : ${linkInstagram('ucup')}`)


// // let nama='ucup';
// // let ins='@ucup.gmail.com';

// // // ins didalam function linksInstagram adalah parameter 
// // function linkInstagram(){
// //   ins='kontol'
// //   let  url='http://instagram.com/'
// //     return url+ins;
// // }

// // // apabila tidak apa parameter didalam function nya tetapi terdapat variabel lokal di dalam nya maka akan menjalankan variabel lokal tersebut
// // console.log(linkInstagram())


// // let nama='ucup';
// // let ins='@ucup.gmail.com';

// // // ins didalam function linksInstagram adalah parameter 
// // function linkInstagram(){
// //   let  url='http://instagram.com/'
// //     return url+ins;
// // }
// // sebaliknya apabila tidak ada variabel lokal dan parameter maka akan mencari ke variabel global yang sesuai dengan printah yang di jalankan dalam function
// // apabila tidak ada variabel lokal variabel global dan parameter maka akan error


// // let nama='ucup';
// // // let ins='@ucup.gmail.com';

// // // ins didalam function linksInstagram adalah parameter 
// // function linkInstagram(ins){
// //   let  url='http://instagram.com/'
// //     return url+ins;
// // }
// // // apabila tidak ada variabel lokal dan variabel global tertapi terdapat parameter dalam function
// // // maka parameter dapat di isi sesuai keinginan jika ingin digunakan
// // console.log(linkInstagram('titidk'))




  let hasil=prompt('nama anda :')
  console.log(hasil)
//  function nama(p){
//    console.log(p);
//  }
//  nama('abdul')
