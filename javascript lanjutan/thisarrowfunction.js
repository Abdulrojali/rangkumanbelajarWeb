// konsep this pada arrow function
// pada arrow function tidak mempunyai konsep this




// arrow function menggunakan constructor function pada object
// this pada console di methode kurang dan tambah akan muncul karena object nama menggunakan this 
// di dalam console this akan mencari variabel di dalam function mahasiswa atau mencari keluar apabila tidak ada
// let mahasiswa =function(){
//           this.nama='ucok',
//         this.alamat='perumahan bukit citra asri',
//          this.umur=19,
//         this.tambah=(usia)=>{
//                this.umur+=usia;
//               console.log(`halo ${this.nama},usia anda saat ini ${this.umur+=usia}`)
//       }
//         this.kurang=(usia)=>{
//               this.umur-=usia;
//               console.log(`halo ${this.nama}, usia anda saat ini ${this.umur-=usia}`)
//       }
//   }

//   let ucok=new mahasiswa()

// kendala nya apabila tidak menggunakan constructor function akan error karena tidak ada declaration this pada object contoh nya pada object literal di bawah ini

// kasus pertama
// apabila menggunakan object literal
let mahasiswa1={
    nama:`ucok`,
    alamat:`perumahan bukit citra asri`,
    umur:19,
    // apabila function pada methode nya bukan arrow function maka akan bisa saja seperti contoh di bawah ini
    tambah:function(usia){
        mahasiswa.umur+=usia;
        console.log(`halo ${this.nama}, usia anda saat ini ${this.umur+=usia}`)
    },
    // apabila menggunakan arrow function this di dalam console akan mencari declaration object di di luar variabel mahasiswa atau menjadi object window
    kurang:(usia)=>{
        console.log(`halo ${this.nama}, usia anda saat ini ${this.umur+=usia}`)
        console.log(this)
    }
}

// kasus kedua


let mahasiswa =function(){
    this.nama='ucok',
  this.alamat='perumahan bukit citra asri',
   this.umur=19,
   // ini adalah function expresion yang tidak akan kena hoisting
  this.tambah=(usia)=>{
         this.umur+=usia;
         console.log(`halo ${this.nama},usia anda saat ini ${this.umur+=usia}`)
  }
  

  // ini adalah function declaration akan kena hoisting
//   setInterval(function(){
//     // makanya hasilnya umur adalah NaN karena setinterval function terkena hoisting
//     // console.log(this.umur++)

//     // hasilnya undifined
//     //console.log(this.umur)

//     // hasilnya object windows
//     // console.log(this)
//   },500)
// }

  // cara mengatasinya
  // karena arrow function tidak ada konsep this dia akan mencari this umur di dalam object mahasiswa
  setInterval(()=>{
    // console.log(this.umur++)
},1000)
}

let ucok=new mahasiswa()


 
















































// const input=document.querySelectorAll('input');
// const button=document.getElementById('click');
// const option=document.querySelectorAll('option');
// console.log(option)

// button.addEventListener('click',function(){
//     input.forEach((el)=>{
//         let inputEL=el.value;
//         if(el.classList.contains('pertama')){
//             console.log(inputEL)
//         }
//         else if(el.classList.contains('kedua')){
//             console.log(inputEL)
//         }
//     })
//     option.forEach((pilih)=>{
//         let inputOption=pilih.className
//         if(pilih.classList.contains(inputOption)){

//             let kalkulator=function(){
//                 let hasil;
//                 let x=document.querySelector('.pertama');
//                 let y=document.querySelector('.kedua');
//                 this.kali=(x,y)=>{
//                      hasil=x*y;
//                     console.log(`jumlah kali bilang : ${hasil}}`)
//                 },
//                 this.bagi=(x,y)=>{
//                     hasil=x/y;
//                     console.log(`jumlah bagi bilang : ${hasil}`)
//                 },
//                 this.kurang=(x,y)=>{
//                     hasil=x-y;
//                     console.log(`jumlah kurang bilangan : ${hasil}`)
//                 },
//                 this.tambah=(x,y)=>{
//                     hasil=x+y;
//                     console.log(`jumlah tambah bilangan : ${hasil}`)
//                 }
//             }
//         }
//     })
// })


// let kalkulator=function(){
//     let hasil;
//     this.kali=(x,y)=>{
//          hasil=x*y;
//         console.log(`jumlah kali bilang : ${hasil}}`)
//     },
//     this.bagi=(x,y)=>{
//         hasil=x/y;
//         console.log(`jumlah bagi bilang : ${hasil}`)
//     },
//     this.kurang=(x,y)=>{
//         hasil=x-y;
//         console.log(`jumlah kurang bilangan : ${hasil}`)
//     },
//     this.tambah=(x,y)=>{
//         hasil=x+y;
//         console.log(`jumlah tambah bilangan : ${hasil}`)
//     }
// }
// let hasil=new kalkulator()


