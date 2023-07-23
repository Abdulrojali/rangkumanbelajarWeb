// for of untuk iterable // array string dan argument pada function sedangkan 
// for in untuk enumetrable  yaitu object

// macam macam cara looping

// 1. meloop array
const nama=['abdul','ucup','rizky','ridwan'];

// for(let i=0; i<nama.length; i++){
//     console.log(nama[i])
// }

// let j=0
// while(j<nama.length){
//     console.log(nama[j])
//     j++
// }

// looping isi array menggunakan foreach
// nama.forEach(m=> console.log(m))
// atau
//looping indeks array menggunakan foreach
// foreach bisa mempunyai dua arguments, arguments pertama iyalah indeks sesuai nama dari arguments 1
// sedangkan arguments 2 indeks dari array 
// nama.forEach((m,i)=>console.log(`nama saya :${m}, saya urutan ke : ${i}`))



// looping isi array menggunakan for of
//  for(let m of nama){
//      console.log(m)
//  }
//  // looping indeks array menggunakan for of
//  for(let m of nama.entries()){
//     console.log(m)
//  }
//  // atau
//  for (let[i,m] of nama.entries()){
//     console.log(`halo nama saya ${m}, saya indeks ke - ${i}`)
//  }



// 2. meloop string
//  const hasil='iniloopingstring';
// //  for (let i =0; i<hasil.length; i++){
// //      console.log(hasil[i])
// //  }
//   let j=0;
//   while(j<hasil.length){
//       console.log(hasil[j])
//       j++
//   }
// for(let h of hasil){
//     console.log(h)
// }


// 3. melooping nodelist
const liNumber=document.querySelectorAll('li')
// node list bukan lah array jadi harus hati hati saat melooping node list menggunakan forEach karena mungkin bisa saja error 
// liNumber.forEach(m=> console.log(m.innerHTML))

// for(let i =0; i<liNumber.length; i++){
//     console.log(liNumber[i].innerHTML)
// }

// let j=0;
// while(j<liNumber.length){
//     console.log(liNumber[j].innerHTML)
//     j++
// }

// for(m of liNumber){
//     console.log(m.innerHTML)
// }


// 4. melooping arguments pada function
// function number(){
//     // hanya bisa untuk for of saja karena arguments pada function bukan lah array jadi foreach dan method lain tidak bisa di gunakan untuk meloop arguments pada fucntion
//     let hasil=0
//    for(n of arguments){
//     hasil+=n;
//    }
//    return hasil
// }
// console.log(number(1,2,3,4,5))


// object 
let mahasiswa={
    nama:'ucup',
    alamat:'cicurug'
}
// melooping object indeks menggunakan for in
for(n in mahasiswa){
    console.log(n)//=> hasil nama , alamat karena nama dan alamat merupakan indeks dari mahasiswa
}
// atau
for(n in mahasiswa){
    console.log(mahasiswa[n])//=> hasilnya : ucup dan cicurug 
}