/// map filter dan reduce

//  1. cara menggunakan filter
// fillter adalah methode array untuk mengeksekusi sesuai perintah code contoh:

// mengfilter angka menggunakan for
// const newAngka=[]
let angka=[-1,6,1,8,3,7,5,7,4,8,9,10];
// for(let i =0; i<angka.length; i++){
//     if(angka[i]>=3){
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)


// mengfilter angka menggunakan methode filter
// disini perintahnya variabel angka dengan callback a setiap nilai apabila lebih besar dari 3 akan di return
// const newAngka=angka.filter(function(a){
//     return a>=3;
// })

// atau
// const newAngka=angka.filter(a=>a>=3);

// console.log(newAngka)


// 2. map 
// map untuk memetakan setiap element menggunakan function baru di dalam array contoh:
// const newAngka=angka.map((a=> a*2))
// // artinya buat variabel baru dengan memetakan element array pada angka di kali 2 dan tidak mengubah array awalnya yaitu angka
// console.log(angka)
// console.log(newAngka)


// 3. reduce
// melakukan sesuatu pada setiap element array
// let angka1=[1,2,3,4,5]
// // accumulator adalah hasil jumlah dari currentValue
// // currentValue melooping array
// const newAngka=angka1.reduce((accumulator,currentValue)=> accumulator+currentValue);
// console.log(newAngka)

// const newAngka2=angka1.reduce((a,b)=> a-b);
// console.log(newAngka2,)


// 4 methode chaining adalah menggabungkan 3methode di atas sekali panggil
// const hasil=angka.filter(a=>a>=2);
//   hasil.map(a=>a*3);
//   hasil.reduce((acc,red)=>acc+red);
// console.log(hasil)



let nama = angka.filter(c=>c>6)
console.log(nama)

let nama2= angka.map(b=>b+2)
console.log(nama2)

let nama3=angka.reduce((acc,red)=>acc+red)
console.log(nama3)