// A. cara membuat object pada javascript

// note properti adalah nilai dalam object
//  sedangkan methode di object berisi function 


//  //1. object literal
// let mahasiswa={
// nama : 'abdul',  //ini adalah nilai
// makan: 10,
// energy: function(isi){  //ini adalah contoh methode
//     this.makan=this.makan+isi;
//     console.log(`halo : ${this.nama}, selamat makan!`)
// },
// } 


//  2. function declaration
//   function mahasiswa(nama, makan){
//       let mahasiswa={}
//       mahasiswa.nama=nama;
//       mahasiswa.makan=makan;
//       mahasiswa.energy=function(isi){
//           this.makan+=isi;
//           console.log(`selamat makan ${this.nama}`);
//       }
//       return mahasiswa;
//   }
//   let zilong = mahasiswa('zilong',20)



// 3. construction function
// sama seperti function declaration tetapi di ganti dengan keyword new saat membuat variabel mahasiswa baru
// dan juga tidak perlu declaration variabel let mahasiswa ={}; , dan juga tidak perlu return lagi karena otomatis di buatkan
//  function mahasiswa(nama, makan){
//      this.nama=nama;
//      this.makan=makan;
//      this.energy=function(isi){
//          this.makan+=isi;
//          console.log(`selamat makan ${this.nama}, kontol kamu`);
//      }
//      this.tidur=function(jam){
//          this.makan-= jam;
//          console.log(`anda telah tidur selama ${jam}, anda kehilangan makan : ${this.makan}`)
//      }
    
//  }
//  let zilong = new mahasiswa('zilong',20)


// 4. object.create()

// ini adalah object methode terpisah menggunakan object literal yang akan di maasukan kedalam object baru
 const objectMahasiswa={
     makan:function(isi){
         this.energy+=isi;
         console.log(`selamat makan ${this.nama}, energy anda saat ini ${this.energy+=isi}`);
     },
     tidur:function(jam){
         this.energy+=jam*2;
         console.log(`selamat tidur ${this.nama}, energy anda saat ini ${this.energy+=jam*2}`);
     },
     main:function(jam){
         this.energy-=jam;; 
         console.log(`selamat bermain ${this.nama}, energy anda saat ini ${this.energy-=jam}`);
     }
 }

// // ini adalah object baru
 function mahasiswa(nama,energy){
    //   ini adalah cara penggunaaan object create di dalam object create terdapat object methode yang telah di buat di atas lalu di masukan kedalam object baru berjudul mahasiswa

     let mahasiswa =Object.create(objectMahasiswa);
     mahasiswa.nama=nama;
     mahasiswa.energy=energy;
     return mahasiswa
 }
 let ucup=mahasiswa('ucup',20)



// B. prototype
// membuat prototype menggunakan constructor function
// alasan mengapa constructor function tidak menggunakan return dan variabel object karena sudah terdapat dalam prototype nya
// function mahasiswa(nama , energy){
//     this.nama=nama;
//     this.energy=energy;
// }
// // cara membuat prototype nya
// mahasiswa.prototype.makan=function(isi){
//    let makan= this.energy+=isi;
//     console.log(`selamat makan ${this.nama}, energy anda bertambah sebanyak ${makan}`);
// }
// mahasiswa.prototype.tidur=function(jam){
//   let tidur=  this.energy+=jam*2;
//     console.log(`selamat tidur ${this.nama}, energy anda bertambah sebanyak ${tidur}`);
// }
// mahasiswa.prototype.main=function(jam){
//   let main=  this.energy-=jam;
// console.log(`selamat main ${this.nama}, energy anda berkurang sebanyak ${main}`);
// }

// cara membuat prototype menggunakan class
// class mahasiswa{
//     constructor(nama, energy){
//     this.nama=nama;
//     this.energy=energy;
//     }
//    makan(isi){
//         this.energy+=isi;
//          console.log(`selamat makan ${this.nama}, energy anda bertambah sebanyak ${makan}`);
//      }
//      main(jam){
//         this.energy-=jam;
//       console.log(`selamat main ${this.nama}, energy anda berkurang sebanyak ${ this.energy-=jam}`);
//       }
//      tidur(jam){
//          this.energy+=jam*2;
//          console.log(`selamat tidur ${this.nama}, energy anda bertambah sebanyak ${this.energy+=jam*2}`);
//      }
// }
// let ucok= new mahasiswa('ucok', 20)

